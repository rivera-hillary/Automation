describe('Validación', function() {
    beforeEach('Ingresar a la página wawandco', function() {
        cy.visit('/');
        cy.get('.nav-link.btn-cta').click();
    })
    it('Validar el correo', function() {
        cy.get('h5 > a').contains('hello@wawand.co');
        cy.get('h5 > a').should('have.attr','href').and('eq','mailto:hello@wawand.co');
    })
    it('Validar las direcciones', function() {
        cy.get('ul > li:nth-child(1)').contains('Carrera 66B # 49 - 90');
        cy.get('ul > li:nth-child(2)').contains('Barranquilla, Atlantico 080001');
        cy.get('ul > li:nth-child(3)').contains('Colombia');
        cy.get('ul > :nth-child(1)').contains('36 Maplewood Ave');
        cy.get('ul > :nth-child(2)').contains('Portsmouth, NH 03801');
        cy.get('ul > :nth-child(3)').contains('USA');
    })
    it('Validar url de redes sociales', function() {
        cy.get('.social > ul > li:nth-child(1) a').should('have.attr','href').and('eq','https://dribbble.com/wawandco');
        cy.get('.social > ul > li:nth-child(2) a').should('have.attr','href').and('eq','https://www.facebook.com/wawandco/');
        cy.get('.social > ul > li:nth-child(3) a').should('have.attr','href').and('eq','https://github.com/wawandco');
        cy.get('.social > ul > li:nth-child(4) a').should('have.attr','href').and('eq','https://www.linkedin.com/company/wawandco/');
        cy.get('.social > ul > li:nth-child(5) a').should('have.attr','href').and('eq','https://twitter.com/wawandco');
    })
    it('Validar a donde redirecciona el botón Read Case', function() {
        cy.get('.outlined-btn').click();
        cy.url().should('include','/work/symbolcase');
    })
})