// Funções principais do fluxo da aplicação
function carregar() {
    const dados = localStorage.getItem('contatos');
    if (!dados) return [];
    try {
        const arr = JSON.parse(dados);
        return arr.map(c => new Contato(c._nome, c._email, c._telefone));
    } catch {
        return [];
    }
}

function salvar(contatos) {
    localStorage.setItem('contatos', JSON.stringify(contatos));
}

function render(contatos) {
    const tbody = document.querySelector('#contact-table tbody');
    tbody.innerHTML = '';
    contatos.forEach((contato, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${contato.nome}</td>
            <td>${contato.email}</td>
            <td>${contato.telefone}</td>
            <td>
                <button class="edit-btn" onclick="editarContato(${idx})">Editar</button>
                <button class="remove-btn" onclick="removerContato(${idx})">Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

let editandoIdx = null;
function handleSubmit(e) {
    e.preventDefault();
    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('phone').value.trim();
    try {
        if (editandoIdx !== null) {
            const novoContato = new Contato(nome, email, telefone);
            contatos[editandoIdx] = novoContato;
            editandoIdx = null;
            document.querySelector('#contact-form button[type="submit"]').textContent = 'Adicionar';
        } else {
            const novoContato = new Contato(nome, email, telefone);
            contatos.push(novoContato);
        }
        salvar(contatos);
        render(contatos);
        document.getElementById('contact-form').reset();
    } catch (err) {
        alert(err.message);
    }
}

function editarContato(idx) {
    const contato = contatos[idx];
    document.getElementById('name').value = contato.nome;
    document.getElementById('email').value = contato.email;
    document.getElementById('phone').value = contato.telefone;
    editandoIdx = idx;
    document.querySelector('#contact-form button[type="submit"]').textContent = 'Salvar';
}

function removerContato(id) {
    contatos.splice(id, 1);
    salvar(contatos);
    render(contatos);
}

// Inicialização
const contatos = carregar();
document.getElementById('contact-form').addEventListener('submit', handleSubmit);
render(contatos);
window.removerContato = removerContato;
window.editarContato = editarContato;
