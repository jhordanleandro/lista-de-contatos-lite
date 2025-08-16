// Classe Contato com getters/setters e validações simples
class Contato {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    get nome() {
        return this._nome;
    }
    set nome(valor) {
        if (!valor || valor.trim().length === 0) throw new Error('O nome do contato não pode estar vazio.');
        if (!/^[A-Za-zÀ-ú]+(?: [A-Za-zÀ-ú]+)*$/.test(valor)) throw new Error('O nome do contato é inválido! Deve incluir apenas letras (com ou sem acentos) e espaços.');

        this._nome = valor.trim();
    }

    get email() {
        return this._email;
    }
    set email(valor) {
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor)) throw new Error('O e-mail informado é inválido!');

        this._email = valor.trim();
    }

    get telefone() {
        return this._telefone;
    }
    set telefone(valor) {
        if (!/^(\+55\s?)?(\(?\d{2}\)?\s?)?(\d{4,5}-?\d{4})$/.test(valor)) throw new Error('O número de telefone do contato não segue um padrão válido!');

        this._telefone = valor.trim();
    }
}

// Exporta para uso em app.js
window.Contato = Contato;
