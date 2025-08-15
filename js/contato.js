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
        if (!valor || valor.trim().length === 0) throw new Error('Nome não pode ser vazio');
        this._nome = valor.trim();
    }

    get email() {
        return this._email;
    }
    set email(valor) {
        if (!valor || !valor.includes('@')) throw new Error('E-mail deve conter "@"');
        this._email = valor.trim();
    }

    get telefone() {
        return this._telefone;
    }
    set telefone(valor) {
        if (!valor || !/^\d{8,}$/.test(valor)) throw new Error('Telefone deve conter ao menos 8 dígitos');
        this._telefone = valor.trim();
    }
}

// Exporta para uso em app.js
window.Contato = Contato;
