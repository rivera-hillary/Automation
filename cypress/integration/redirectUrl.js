describe('Dirección de url', function() {
    beforeEach('Ingresar a la página wawandco', function() {
        cy.visit('/');
    })
    it ('Confirmar la url donde se encuentra', function() {
        cy.url().should('eq', 'https://wawand.co/');
    })
    it('Se dirija a la url Services', function() {
        cy.get('.nav-link.services').click();
        cy.url().should('include','/services');
    })
    it('Se dirija a la url Work', function() {
        cy.get('.nav-link.work').click();
        cy.url().should('include','/work');
    })
    it('Se dirija a la url Our process', function() {
        cy.get('.nav-link.process').click();
        cy.url().should('include','/process');
    })
    it('Se dirija a la url Company', function() {
        cy.get('.nav-link.company').click();
        cy.url().should('include','/company');
    })
    it('Se dirija a la url Blog', function() {
        cy.get('.nav-link.blog').click();
        cy.url().should('include','/blog');
    })
    it('Se dirija a la url Contact', function() {
        cy.get('.nav-link.btn-cta').click();
        cy.url().should('include','/contact');
    })
})