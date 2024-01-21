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
    cy.get('.jarombek-nav-middle').contains('Andrew Jarombek').should('exist');

    cy.get('.jarbek-search-bar > input').should('have.attr', 'placeholder', 'Search');

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

  it('has a functional search bar', () => {
    cy.get('.jarombek-posts-grid').find('.jarombek-blog-preview').should('have.length', 12);
    cy.get('.jarbek-search-bar input').type('JavaScript');
    cy.get('.jarbek-search-bar button').contains('GO').click();
    cy.url().should('equal', 'http://localhost:8080/blog?query=JavaScript&page=1');
    cy.get('.jarombek-posts-grid').find('.jarombek-blog-preview').its('length').should('be.gte', 1);

    cy.get('.jarbek-search-bar input').clear().type('Python');
    cy.get('.jarbek-search-bar button').contains('GO').click();
    cy.url().should('equal', 'http://localhost:8080/blog?query=Python&page=1');
    cy.get('.jarombek-posts-grid').find('.jarombek-blog-preview').its('length').should('be.gte', 1);

    cy.get('.jarbek-search-bar input').clear().type('Terraform');
    cy.get('.jarbek-search-bar button').contains('GO').click();
    cy.url().should('equal', 'http://localhost:8080/blog?query=Terraform&page=1');
    cy.get('.jarombek-posts-grid').find('.jarombek-blog-preview').its('length').should('be.gte', 1);

    cy.get('.jarbek-search-bar input').clear().type('AWS');
    cy.get('.jarbek-search-bar button').contains('GO').click();
    cy.url().should('equal', 'http://localhost:8080/blog?query=AWS&page=1');
    cy.get('.jarombek-posts-grid').find('.jarombek-blog-preview').its('length').should('be.gte', 1);
  });

  it('has a functional pagination bar', () => {
    cy.url().should('equal', 'http://localhost:8080/blog');
    cy.get('.jarombek-posts-grid').find('.jarombek-blog-preview').should('have.length', 12);
    cy.get('.jarbek-pagination-bar').find('.jarbek-pag-current').should('contain.text', 'I');
    cy.get('.jarbek-pagination-bar').find('.jarbek-pag-next-item').should('contain.text', 'II');

    cy.get('.jarbek-pagination-bar').find('.jarbek-pag-next-item').click();

    cy.url().should('equal', 'http://localhost:8080/blog?page=2');
    cy.get('.jarombek-posts-grid').find('.jarombek-blog-preview').should('have.length', 12);
    cy.get('.jarbek-pagination-bar').find('.jarbek-pag-first').should('contain.text', 'I');
    cy.get('.jarbek-pagination-bar').find('.jarbek-pag-current').should('contain.text', 'II');
    cy.get('.jarbek-pagination-bar').find('.jarbek-pag-next-item').should('contain.text', 'III');

    cy.get('.jarbek-pagination-bar').find('.jarbek-pag-next-item').click();

    cy.url().should('equal', 'http://localhost:8080/blog?page=3');
    cy.get('.jarombek-posts-grid').find('.jarombek-blog-preview').should('have.length', 12);
    cy.get('.jarbek-pagination-bar').find('.jarbek-pag-first').should('contain.text', 'I');
    cy.get('.jarbek-pagination-bar').find('.jarbek-pag-previous-item').should('contain.text', 'II');
    cy.get('.jarbek-pagination-bar').find('.jarbek-pag-current').should('contain.text', 'III');
    cy.get('.jarbek-pagination-bar').find('.jarbek-pag-next-item').should('contain.text', 'IV');

    cy.get('.jarbek-pagination-bar').find('.jarbek-pag-first').click();

    cy.url().should('equal', 'http://localhost:8080/blog?page=1');
    cy.get('.jarombek-posts-grid').find('.jarombek-blog-preview').should('have.length', 12);
    cy.get('.jarbek-pagination-bar').find('.jarbek-pag-current').should('contain.text', 'I');
    cy.get('.jarbek-pagination-bar').find('.jarbek-pag-next-item').should('contain.text', 'II');
  });
});
