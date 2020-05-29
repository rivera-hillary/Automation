describe('Validación de rutas en Our Process', function() {
    it('Ir a la página Our Process de wawandco', function() {
        cy.visit('/');
        cy.get('.nav-link.process').click();
        cy.url().should('include','/process');
    })
    it('Validar ruta de la sección Ready for the kick off?', function() {
        cy.get('.cta-white').click();
        cy.url().should('include','/contact');
    })
})