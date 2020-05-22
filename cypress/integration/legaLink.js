describe('Confirmación del modal', function() {
    beforeEach('Ingresar a la página wawandco', function() {
        cy.visit('/');
        cy.viewport(1000, 660);
    })
    it('Comprobar que se muestre el modal', function() {
        cy.get('.iubenda-white').should('have.attr','href').and('eq','https://www.iubenda.com/privacy-policy/20396701');
    })
})