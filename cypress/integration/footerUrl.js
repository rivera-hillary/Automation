describe('Dirección de url', function() {
    beforeEach('Ingresar a la página wawandco', function() {
        cy.visit('/');
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
    })
    // Redes sociales
    it('Se dirija a la url de la red social Dribble', function() {
        cy.get('.social > ul > li').eq(0).find('a').should('have.attr','href').and('eq','https://dribbble.com/wawandco');
    })
    it('Se dirija a la url de la red social Facebook', function() {
        cy.get('.social > ul > li').eq(1).find('a').should('have.attr','href').and('eq','https://www.facebook.com/wawandco/');
    })
    it('Se dirija a la url de la red social Github', function() {
        cy.get('.social > ul > li').eq(2).find('a').should('have.attr','href').and('eq','https://github.com/wawandco');
    })
    it('Se dirija a la url de la red social Linkedin', function() {
        cy.get('.social > ul > li').eq(3).find('a').should('have.attr','href').and('eq','https://www.linkedin.com/company/wawandco/');
    })
    it('Se dirija a la url de la red social Twitter', function() {
        cy.get('.social > ul > li').eq(4).find('a').should('have.attr','href').and('eq','https://twitter.com/wawandco');
    })
    // Falla la prueba después de esperar 1 min y no dirigirse a la url
    it('Se dirija a la url del correo', function() {
        cy.get('.phone-mail > ul > li > a').click();
        cy.url().should('include','/linkto:hello@wawand.co');
        // Debe ser mailto:hello@wawand.co
    })
})