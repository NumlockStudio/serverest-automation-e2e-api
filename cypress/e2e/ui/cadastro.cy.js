import { faker } from '@faker-js/faker';
import CadastroPage from '../../support/pageObjects/cadastroPage';

describe('cadastro', () => {

  var newUserData;

  beforeEach(() => {
    newUserData = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      administrador: "true"
    };
  })

    it('realizar cadastro de usuário', () => {
      CadastroPage.cadastrarUsuario(
        newUserData.nome,
        newUserData.email,
        newUserData.password
      );
      CadastroPage.validarCadastroRealizado();
    });
});