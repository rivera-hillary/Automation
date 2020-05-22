describe('Dirección de url', function() {
    beforeEach('Ingresar a la página wawandco', function() {
        cy.visit('/');
        cy.viewport(1000, 660);
    })
    it('Se dirija a la url Services', function() {
        cy.get('.links').contains('Services').click();
        cy.url().should('include','/services');
    })
    it('Se dirija a la url Work', function() {
        cy.get('.links').contains('Work').click();
        cy.url().should('include','/work');
    })
    it('Se dirija a la url Our process', function() {
        cy.get('.links').contains('Our Process').click();
        cy.url().should('include','/process');
    })
    it('Se dirija a la url Company', function() {
        cy.get('.links').contains('Company').click();
        cy.url().should('include','/company');
    })
    it('Se dirija a la url Blog', function() {
        cy.get('.links').contains('Blog').click();
        cy.url().should('include','/blog');
    })/*
    // Redes sociales
    it('Se dirija a la url de la red social Dribble', function() {
        cy.get(':nth-child(2) > a > .fab').should('have.attr', 'href').and('include', 'dribble').then(href);
    })
    it('Se dirija a la url de la red social Dribble', function() {
        cy.get('.social').should('have.attr','href').and('eq','https://dribbble.com/wawandco')
        //cy.get(':nth-child(2) > a > .fab').should('have.attr','href').and('eq','https://dribbble.com/wawandco');
    })*/
})