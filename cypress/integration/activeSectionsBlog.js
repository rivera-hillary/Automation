describe('Activación de secciones', function() {
    it ('Ir a la pàgina de wawandco', function() {
        cy.visit('/');
        cy.get('.nav-link.blog').click();
        cy.get('.nav-link.blog').should('have.class','active');
    })/*
    it('All is active', function() {
        cy.get('.mr-3:nth-child(1)').click();
        cy.get('.mr-3:nth-child(1)').should('have.class','active');
    })*/
    it('Product Development is active', function() {
        cy.get('.filters > li:nth-child(2)').click();
        cy.url().should('include','/tags/product-development');
        cy.get('.filters > ol > li:nth-child(2)').should('have.class','active');;
    })/*
    it('Software Development is active', function() {
        cy.get('.mr-3:nth-child(3)').click();
        cy.get('.mr-3:nth-child(3)').should('have.class','active');
    })*/
})