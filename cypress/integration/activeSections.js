describe('', function() {
    it ('Ir a la pàgina de wawandco', function() {
        cy.visit('/');
    })
    it('Está activado Services', function() {
        cy.get('.nav-link.services').click();
        cy.get('.nav-link.services').should('have.class','active');
        cy.visit('/');
    })
    it('Está activado Work', function() {
        cy.get('.nav-link.work').click();
        cy.get('.nav-link.work').should('have.class','active');
        cy.visit('/');
    })
    it('Está activado Our Process', function() {
        cy.get('.nav-link.process').click();
        cy.get('.nav-link.process').should('have.class','active');
        cy.visit('/');
    })
    it('Está activado Company', function() {
        cy.get('.nav-link.company').click();
        cy.get('.nav-link.company').should('have.class','active');
        cy.visit('/');
    })
    it('Está activado Blog', function() {
        cy.get('.nav-link.blog').click();
        cy.get('.nav-link.blog').should('have.class','active');
    })
})