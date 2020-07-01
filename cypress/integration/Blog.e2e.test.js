/**
 * E2E tests written with Cypress for the blog post page.
 * @author Andrew Jarombek
 * @since 6/30/2020
 */

describe('Blog E2E Tests', () => {

    beforeEach(() => {
        cy.visit('/blog');
    });

    it('loads the blog page as expected', () => {
        cy.get('.jarombek-nav-middle')
            .contains('Andrew Jarombek')
            .should('exist');

        cy.get('.jarbek-search-bar > input')
            .should('have.attr', 'placeholder', 'Search');

        cy.get('.jarombek-posts-grid')
            .find('.jarombek-blog-preview')
            .should(($div) => {
                expect($div).to.have.length(12);
            });
    });

    it('navigate to the home page from the nav bar title', () => {
        cy.get('.jarombek-nav-middle').click();
        cy.url().should('equal', 'http://localhost:8080/');
    });

    it('navigate to the home page from the nav bar home icon', () => {
        cy.get('.jarombek-nav-left img').click();
        cy.url().should('equal', 'http://localhost:8080/');
    });
});
