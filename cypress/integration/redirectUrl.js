describe('Dirección de url', function() {
    it('Ir a la página de wawandco', function() {
        cy.visit('/');
    })
    it ('Confirmar la url donde se encuentra', function() {
        cy.url().should('eq', 'https://wawand.co/');
    })
    it('Se dirija a la url Services', function() {
        cy.get('.nav-link.services').click();
        cy.url().should('include','/services');
        cy.visit('/');
    })
    it('Se dirija a la url Work', function() {
        cy.get('.nav-link.work').click();
        cy.url().should('include','/work');
        cy.visit('/');
    })
    it('Se dirija a la url Our process', function() {
        cy.get('.nav-link.process').click();
        cy.url().should('include','/process');
        cy.visit('/');
    })
    it('Se dirija a la url Company', function() {
        cy.get('.nav-link.company').click();
        cy.url().should('include','/company');
        cy.visit('/');
    })
    it('Se dirija a la url Blog', function() {
        cy.get('.nav-link.blog').click();
        cy.url().should('include','/blog');
        cy.visit('/');
    })
    it('Se dirija a la url Contact', function() {
        cy.get('.nav-link.btn-cta').click();
        cy.url().should('include','/contact');
        cy.visit('/');
    })
})