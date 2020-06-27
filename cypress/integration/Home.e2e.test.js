/**
 * E2E tests written with Cypress for the application home page.
 * @author Andrew Jarombek
 * @since 6/26/2020
 */

describe('Home E2E Tests', () => {

    it('loads the home page as expected', () => {
       cy.visit('/');
       cy.get('.jarbek-home-title').contains('Andrew Jarombek').should('exist');
       cy.get('.jarbek-home-sub-title').contains('Software Development Hub').should('exist');
    });
});
