const STORAGE_KEY = '@ong_voluntarios';

export const storage = {
    getVoluntarios() {
        const dados = localStorage.getItem(STORAGE_KEY);
        return dados ? JSON.parse(dados) : [
            { nome: 'Ana Souza', email: 'ana@exemplo.com' },
            { nome: 'Carlos Lima', email: 'carlos@exemplo.com' }
        ];
    },

    salvarVoluntario(novoVoluntario) {
        const voluntarios = this.getVoluntarios();
        voluntarios.push(novoVoluntario);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(voluntarios));
        return voluntarios;
    }
};