/**
 * E2E tests written with Cypress for the application home page.
 * @author Andrew Jarombek
 * @since 6/26/2020
 */

describe('Home E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the home page as expected', () => {
    cy.get('.jarbek-home-title').contains('Andrew Jarombek').should('exist');

    cy.get('.jarbek-home-sub-title').contains('Software Development Hub').should('exist');
  });

  it('move navigate to the blog page', () => {
    cy.get('.jarbek-home-blog-button').click();
    cy.url().should('include', '/blog');
  });

  it('move down to feature list', () => {
    cy.get('.jarbek-figure').get('a[href="#features"]').find('img').click();

    cy.url().should('include', '#features');
  });

  it('navigate to my resume from the feature list', () => {
    cy.get('.jarbek-feature-content').contains('RESUME').click();
    cy.url().should('include', '/resume');
  });

  it('navigate to my resume from the feature list paragraph', () => {
    cy.get('a[href="/resume"] > p').click();
    cy.url().should('include', '/resume');
  });

  it('navigate to the statistics page from the feature list', () => {
    cy.get('.jarbek-feature-content').contains('STATISTICS').click();
    cy.url().should('include', '/stats');
  });

  it('navigate to the statistics page from the feature list paragraph', () => {
    cy.get('a[href="/stats"] > p').click();
    cy.url().should('include', '/stats');
  });

  it('navigate to the blog page from the feature list', () => {
    cy.get('.jarbek-feature-content').contains('ARTICLES').click();
    cy.url().should('include', '/blog');
  });

  it('navigate to the blog page from the feature list paragraph', () => {
    cy.get('a[href="/blog"] > p').click();
    cy.url().should('include', '/blog');
  });

  it('footer navigates to my github profile', () => {
    const footerGitHub = cy.get('.jarbek-figure').get('a[href="https://github.com/AJarombek"]');
    footerGitHub.should('exist').should('have.attr', 'href', 'https://github.com/AJarombek');

    footerGitHub.invoke('attr', 'href', '#github-ajarombek');
    footerGitHub.should('have.attr', 'href', '#github-ajarombek');

    footerGitHub.click();
    cy.url().should('include', '#github-ajarombek');
  });
});
