describe('Validación de rutas en services', function() {
    beforeEach('Ir a la página services de wawandco', function() {
        cy.visit('/');
        cy.get('.nav-link.services').click();
        cy.url().should('include','/services');
    })
    it('Validar texto principal', function() {
        cy.get('h1').contains('What We do.');
    })
    it('Validar rutas de la sección WE FOLLOW - User-centered design', function() {
        cy.get('.card > .row > :nth-child(2) > ul > :nth-child(1) > a').should('have.attr','href').and('eq','https://en.wikipedia.org/wiki/User-centered_design');
    })
    it('Validar rutas de la sección WE FOLLOW - Lean product development', function() {
        cy.get('.card > .row > :nth-child(2) > ul > :nth-child(2) > a').should('have.attr','href').and('eq','https://en.wikipedia.org/wiki/Lean_product_development');
    })
    it('Validar rutas de la sección WE FOLLOW - Pragmatic software design', function() {
        cy.get('.card > .row > :nth-child(2) > ul > :nth-child(3) > a').should('have.attr','href').and('eq','https://en.wikipedia.org/wiki/The_Pragmatic_Programmer');
    })
    it('Validar rutas de la sección WE FOLLOW - Agile / SCRUM', function() {
        cy.get('#Dev > .container > .card > .row > :nth-child(2) > ul > :nth-child(1) > a').should('have.attr','href').and('eq','https://en.wikipedia.org/wiki/Scrum_(software_development)');
    })
    it('Validar rutas de la sección WE FOLLOW - The 12-Factor App', function() {
        cy.get('#Dev > .container > .card > .row > :nth-child(2) > ul > :nth-child(2) > a').should('have.attr','href').and('eq','https://en.wikipedia.org/wiki/Twelve-Factor_App_methodology');
    })
    it('Validar rutas de la sección WE FOLLOW - Continuos Integration and delivery', function() {
        cy.get('#Dev > .container > .card > .row > :nth-child(2) > ul > :nth-child(3) > a').should('have.attr','href').and('eq','https://en.wikipedia.org/wiki/Continuous_delivery');
    })
    it('Validar rutas de la sección WE FOLLOW - SOLID', function() {
        cy.get('#Dev > .container > .card > .row > :nth-child(2) > ul > :nth-child(4) > a').should('have.attr','href').and('eq','https://en.wikipedia.org/wiki/SOLID');
    })
    it('Validar rutas de la sección WE DO - TDD', function() {
        cy.get('#Team > .container > .card > .row > .col-md-6 > ul > :nth-child(3) > a').should('have.attr','href').and('eq','https://en.wikipedia.org/wiki/Test-driven_development');
    })
    it('Validar ruta de la sección Ready for the kick off?', function() {
        cy.get('.cta-white').click();
        cy.url().should('include','/contact');
    })
})