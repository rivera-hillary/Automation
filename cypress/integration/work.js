describe('Validación de rutas en work', function() {
    beforeEach('Ir a la página work de wawandco', function() {
        cy.visit('/');
        cy.get('.nav-link.work').click();
        cy.url().should('include','/work');
    })
    it('Validar texto principal', function() {
        cy.get('h1').contains("We're shipping solutions.");
    })
    it('Validar rutas de trabajo AXE Sports', function() {
        cy.get(':nth-child(1) > .container > .row > .col-md-5 > .outlined-btn').click();
        cy.url().should('include','/work/axesport');
    })
    it('Validar rutas de la sección Downtime Parking', function() {
        cy.get(':nth-child(2) > .container > .row > .col-md-5 > .outlined-btn').click();
        cy.url().should('include','/work/dtpcase');
    })
    it('Validar rutas de la sección Symbol Security', function() {
        cy.get(':nth-child(3) > .container > .row > .col-md-5 > .outlined-btn').click();
        cy.url().should('include','/work/symbolcase');
    })
    it('Validar ruta de la sección Dribble', function() {
        cy.get('.dribbble-btn').should('have.attr','href').and('eq','https://dribbble.com/wawandco');
    })
    it('Validar ruta de la sección Ready for the kick off?', function() {
        cy.get('.cta-white').click();
        cy.url().should('include','/contact');
    })
})