describe('Confirmación del modal', function() {
    beforeEach('Ingresar a la página wawandco', function() {
        cy.visit('/');
    })
    it('Comprobar contenga el link del modal', function() {
        cy.get('.iubenda-white').should('have.attr','href').and('eq','https://www.iubenda.com/privacy-policy/20396701');
    })
    it('Comprobar que esté el modal', function() {
        cy.get('.iubenda-white').should('be.hidden').invoke('show').should('be.visible');
    })
})