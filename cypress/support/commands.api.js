Cypress.Commands.add('getUsuarios', () => {
  cy.request({
    method: 'GET',
    url: `${Cypress.env('apiBaseUrl')}/usuarios`,
    headers: {
      accept: 'application/json',
    },
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
})

Cypress.Commands.add('getUsuariosPorId', (id) => {
  cy.request({
    method: 'GET',
    url: `${Cypress.env('apiBaseUrl')}/usuarios/${id}`,
    headers: {
      accept: 'application/json',
    },
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
})

Cypress.Commands.add('postUsuarios', (newUserData) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiBaseUrl')}/usuarios`,
    body: newUserData,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(201);
    const { _id, message } = response.body;
    expect(message).to.eq("Cadastro realizado com sucesso");
    return _id;
  });
})

Cypress.Commands.add('deleteUsuarios', (id) => {
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('apiBaseUrl')}/usuarios/${id}`,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.message).to.eq("Registro excluído com sucesso");
  });
})