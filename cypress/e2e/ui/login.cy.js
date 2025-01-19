import { faker } from '@faker-js/faker';
import LoginPage from '../../support/pageObjects/loginPage';

describe('login', () => {

  var newUserData, idUsuario;

  before(() => {
    newUserData = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      administrador: "true"
    };
    cy.postUsuarios(newUserData).then((id) => {
      idUsuario = id;
    });
  });

  after(() => {
    cy.deleteUsuarios(idUsuario);
  });

  it('login com sucesso', () => {
    LoginPage.login(
      newUserData.email,
      newUserData.password
    );
    LoginPage.validarLoginRealizado();
  });

  it('login inválido', () => {
    cy.fixture('loginInvalido').then(t => {
      LoginPage.login(t.email, t.password);
    });
    LoginPage.validarUsuarioESenhaInvalido();
  });
});