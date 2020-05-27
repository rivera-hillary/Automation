describe('Validación', function() {
    beforeEach('Ingresar a la página wawandco', function() {
        cy.visit('/');
        cy.get('.nav-link.btn-cta').click();
    })
    it('Validar el correo', function() {
        cy.get('h5 > a').contains('hola@wawand.co');
        cy.get('h5 > a').click();
        cy.url().should('include','/contactame');
    })
    it('Validar las direcciones', function() {
        cy.get('ul > li:nth-child(1)').contains('Carrera 66B # 49 - 90');
        // Falla porque es sensible a las tildes
        cy.get('ul > li:nth-child(2)').contains('Barranquilla, Atlántico 080001');
        cy.get('ul > li:nth-child(3)').contains('Colombia');
        // Falla porque debe contener es 36 Maplewood Ave
        cy.get('ul > :nth-child(1)').contains('36 Maplewuud Ave');
        cy.get('ul > :nth-child(2)').contains('Postmouth, NH 03804');
        cy.get('ul > :nth-child(3)').contains('USA');
    })
    it('Validar url de redes sociales', function() {
        cy.get('.social > ul > li:nth-child(1) a').should('have.attr','href').and('eq','https://dribbble.com/wawandco');
        cy.get('.social > ul > li:nth-child(2) a').should('have.attr','href').and('eq','https://www.facebook.com/wawandco/');
        cy.get('.social > ul > li:nth-child(3) a').should('have.attr','href').and('eq','https://gitlab.com/wawandco');
        cy.get('.social > ul > li:nth-child(4) a').should('have.attr','href').and('eq','https://www.linkedin.com/company/wawandco/');
        cy.get('.social > ul > li:nth-child(5) a').should('have.attr','href').and('eq','https://twitter.com/wawandco');
    })
    it('Validar a donde redirecciona el botón Read Case', function() {
        cy.get('.outlined-btn').click();
        // Falla porque debe ser '/work/symbolcase'
        cy.url().should('include','/work/symbolcasa');
    })
})