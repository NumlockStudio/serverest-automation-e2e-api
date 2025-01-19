class LoginPage {

    //Elementos
    getCmpEmail() {
        return cy.get('#email');
    }

    getCmpSenha() {
        return cy.get('#password');
    }

    getBtnEntrar() {
        return cy.getByTestId('entrar');
    }

    //Ações
    visit() {
        cy.visit('/');
    }

    login(email, senha) {
        this.visit()
        this.preencherCampoEmail(email);
        this.preencherCampoSenha(senha);
        this.clicarBtnEntrar();
    }

    validarLoginRealizado() {
        cy.getByTestId('logout')
            .should('be.visible');
    }

    validarUsuarioESenhaInvalido() {
        cy.contains('span', 'Email e/ou senha inválidos')
            .should('be.visible');
    }

    preencherCampoEmail(email) {
        this.getCmpEmail().type(email);
    }

    preencherCampoSenha(senha) {
        this.getCmpSenha().type(senha);
    }

    clicarBtnEntrar() {
        this.getBtnEntrar().click();
    }
}
export default new LoginPage();