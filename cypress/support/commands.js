// https://on.cypress.io/custom-commands

/**
 * Mock external GitHub URL's used in the website.
 */
Cypress.Commands.add('mockAPI', () => {
  cy.server();

  cy.route({
    method: 'GET',
    url: '/api/post/preview?page=1',
    response: {}
  });
});
