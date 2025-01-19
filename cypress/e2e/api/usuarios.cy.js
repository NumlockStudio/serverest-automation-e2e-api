import { faker } from '@faker-js/faker';

describe('Gerenciar usuários', () => {

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
    })

    it('obter lista de usuários', () => {
        cy.getUsuarios().then((response) => {
            expect(response.body).to.have.property('usuarios');
            expect(response.body.usuarios).to.be.an('array');
            expect(response.body.usuarios[0].nome).to.be.an('string');
            expect(response.body.usuarios[0].email).to.be.an('string');
            expect(response.body.usuarios[0].password).to.be.an('string');
            expect(response.body.usuarios[0].administrador).to.be.an('string');
            expect(response.body.usuarios[0]._id).to.be.an('string');
        });
    });

    it('consultar usuário por id', () => {
        cy.getUsuariosPorId(idUsuario).then((response) => {
            expect(response.body.nome).to.be.eq(newUserData.nome);
            expect(response.body.email).to.be.eq(newUserData.email);
            expect(response.body.password).to.be.eq(newUserData.password);
            expect(response.body.administrador).to.be.eq(newUserData.administrador);
            expect(response.body._id).to.be.eq(idUsuario);
        });
    });

    it('deletar usuário', () => {
        cy.deleteUsuarios(idUsuario);
    });
});