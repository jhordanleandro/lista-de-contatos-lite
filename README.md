# Lista de Contatos Lite

Este projeto faz parte do projeto prático da disciplina de Programação para Web do curso de Análise e Desenvolvimento de Sistemas da UFCA.
Disciplina ministrada pelo professor: **Prof. Fabiann Matthaus Dantas Barbosa**.

## Projeto (versão básica)

**Objetivo:** Criar uma página web simples para cadastrar e listar contatos (nome + e-mail + telefone).

### Funcionalidades e requisitos mínimos
- Cadastrar contato via formulário (nome, e-mail, telefone)
- Listar contatos em uma tabela simples
- Excluir contato (botão “Excluir” em cada linha)
- Persistência local: salvar no localStorage com JSON.stringify e carregar com JSON.parse no carregamento da página

### Observação
Edição de contato é opcional (extra).

### Restrições técnicas
- Usar eventos: submit do formulário e click no botão Excluir. Usar event.preventDefault() no submit.
- Organizar a lógica em funções (exemplo: carregar(), salvar(), render(), handleSubmit(e), removerContato(id))
- Representar um contato com uma classe (ex: Contato) com getters/setters e validações simples:
	- nome: não vazio
	- email: conter “@”
	- telefone: somente dígitos (ou padrão simples)
- Salvar array de contatos no localStorage (chave "contatos") usando JSON


### Estrutura de pastas

/lista-contatos-lite
	index.html
	/js
		app.js       // eventos, fluxo e funções
		contato.js   // classe Contato (getters/setters)
	/css
		style.css    // estilos básicos

### Instruções

Link do repositório com o código.
Grupos de 4 a 6 alunos.
