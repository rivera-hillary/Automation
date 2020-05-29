describe('Validación de rutas en Company', function() {
    beforeEach('Ir a la página Company de wawandco', function() {
        cy.visit('/');
        cy.get('.nav-link.company').click();
        cy.url().should('include','/company');
    })
    it('Validar texto principal', function() {
        cy.get('h1').contains('We are Wawandco.');
    })
    it('Validar ruta de la sección Want to join the team?', function() {
        cy.get('.bg-left > .cta-white').click();
        cy.url().should('include','/contact');
    })
    it('Validar ruta de la sección Want to know more about us?', function() {
        cy.get('.col-lg-5 > .cta-white').click();
        cy.url().should('include','/contact');
    })
})