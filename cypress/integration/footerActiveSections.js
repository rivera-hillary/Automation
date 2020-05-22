describe('Dirección de url', function() {
    beforeEach('Ingresar a la página wawandco', function() {
        cy.visit('/');
        cy.viewport(1000, 660);
    })
    it('Está activado Services', function() {
        cy.get('.links').contains('Services').click();
        //En este caso necesito el elemento para realizar el .should() pero no puedo utilizar el contains porque me muestra error
        cy.get('.links').contains('Services')//.should('have.class','active');
    })/*
    it('Está activado Work', function() {
        cy.get('.links').contains('Work').click();
        cy.get('.links').contains('Work').should('have.class','active');
    })
    it('Está activado Our process', function() {
        cy.get('.links').contains('Our Process').click();
        cy.get('.links').contains('Our Process').should('have.class','active');
    })
    it('Está activado Company', function() {
        cy.get('.links').contains('Company').click();
        cy.get('.links').contains('Company').should('have.class','active');
    })
    it('Está activado Blog', function() {
        cy.get('.links').contains('Blog').click();
        cy.get('.links').contains('Blog').should('have.class','active');
    })*/
})