class CadastroPage {

    //Elementos
    getCmpNome() {
        return cy.get('#nome');
    }

    getCmpEmail() {
        return cy.get('#email');
    }

    getCmpSenha() {
        return cy.get('#password');
    }

    getBtnCadastrar() {
        return cy.getByTestId('cadastrar');
    }

    //Ações
    visit() {
        cy.visit('/');
    }

    cadastrarUsuario(nome, email, senha) {
        this.visit();
        this.clicarBtnCadastrar();
        this.preencherCampoNome(nome);
        this.preencherCampoEmail(email);
        this.preencherCampoSenha(senha);
        this.clicarBtnCadastrar();
    }

    validarCadastroRealizado() {
        cy.contains('a', 'Cadastro realizado com sucesso')
            .should('be.visible');
    }

    preencherCampoNome(nome) {
        this.getCmpNome().type(nome);
    }

    preencherCampoEmail(email) {
        this.getCmpEmail().type(email);
    }

    preencherCampoSenha(senha) {
        this.getCmpSenha().type(senha);
    }

    clicarBtnCadastrar() {
        this.getBtnCadastrar().click();
    }


}
export default new CadastroPage();