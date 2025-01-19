Cypress.Commands.add('getUsuarios', () => {
  cy.request({
    method: 'GET',
    url: Cypress.env('apiBaseUrl') + '/usuarios',
    headers: {
      accept: 'application/json',
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('usuarios');
    expect(response.body.usuarios).to.be.an('array')
    expect(response.body.usuarios[0].nome).to.be.an('string');
    expect(response.body.usuarios[0].email).to.be.an('string');
    expect(response.body.usuarios[0].password).to.be.an('string');
    expect(response.body.usuarios[0].administrador).to.be.an('string');
    expect(response.body.usuarios[0]._id).to.be.an('string');
  });
})

Cypress.Commands.add('postUsuarios', (newUserData) => {
  cy.request({
    method: 'POST',
    url: Cypress.env('apiBaseUrl') + '/usuarios',
    body: newUserData,
  }).then((response) => {
    expect(response.status).to.eq(201);
    expect(response.body.message).to.eq("Cadastro realizado com sucesso");
    return response.body._id;
  });
})

Cypress.Commands.add('deleteUsuarios', (id) => {
  cy.request({
    method: 'DELETE',
    url: Cypress.env('apiBaseUrl') + `/usuarios/${id}`,
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.message).to.eq("Registro excluído com sucesso");
  });
})