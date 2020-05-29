describe('Validación de rutas en home', function() {
    beforeEach('Ir a la página de wawandco', function() {
        cy.visit('/');
        cy.url().should('eq', 'https://wawand.co/');
    })
    it('Validar rutas de la sección Proven Experience (Symbolcase)', function() {
        cy.get(':nth-child(1) > .card > .linklight').click().should('have.attr','href').and('eq','https://wawand.co/work/symbolcase/');
        cy.url().should('include','/work/symbolcase');
    })
    it('Validar rutas de la sección Proven Experience (Downtime Parking)', function() {
        cy.get(':nth-child(2) > .card > .linklight').click().should('have.attr','href').and('eq','https://wawand.co/work/dtpcase/');
        cy.url().should('include','/work/dtpcase');
    })
    it('Validar rutas de la sección Proven Experience (More than just code)', function() {
        cy.get('.col > .linklight').click();
        cy.url().should('include','/work/');
    })
    it('Validar rutas de la sección More than just code', function() {
        cy.get('.col-md-8 > .linklight').click();
        cy.url().should('include','/process');
    })
    it("Validar rutas de la sección Let's get started!", function() {
        cy.get('.cta-white').click();
        cy.url().should('include','/contact');
    })
})