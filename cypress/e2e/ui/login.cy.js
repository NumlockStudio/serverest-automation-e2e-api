import { faker } from '@faker-js/faker';
import LoginPage from '../../support/pageObjects/loginPage';
import CadastroPage from '../../support/pageObjects/cadastroPage';

describe('login', () => {

  var newUserData;

  beforeEach(() => {
    newUserData = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      administrador: "true"
    };
  })

  context('login', () => {
    it('login com sucesso', () => {
      cy.postUsuarios(newUserData);
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
  })

  context('cadastro', () => {
    it('realizar cadastro de usuário', () => {
      CadastroPage.cadastrarUsuario(
        newUserData.nome,
        newUserData.email,
        newUserData.password
      );
      CadastroPage.validarCadastroRealizado();
    });
  });
});