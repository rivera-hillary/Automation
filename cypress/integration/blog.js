describe('Validación de rutas en Blog', function() {
    beforeEach('Ir a la página Blog de wawandco', function() {
        cy.visit('/blog');
        cy.url().should('include','/blog');
    })
    //Verificar texto principal de la página: Our Blog.
    it('Validar texto principal', function() {
        cy.get('h1').contains('Our Blog.');
    })
    //Validar el estado activo de cada categoría de entrada del blog:
    it('All is active', function() {
        cy.get('.filters > .d-flex > :nth-child(1)').click();
        cy.get('.mr-3:nth-child(1)').should('have.class','active');
    })
    it('Product Development is active', function() {
        cy.get('.filters > .d-flex > :nth-child(2)').click();
        cy.get('.mr-3:nth-child(2)').should('have.class','active');
    })
    it('Software Development is active', function() {
        cy.get('.filters > .d-flex > :nth-child(3)').click();
        cy.get('.mr-3:nth-child(3)').should('have.class','active');
    })
    //Validar ruta de entrada del blog:
    it("Validar ruta de la sección Go's Locations & Alpine Docker image", function() {
        cy.get(':nth-child(1) > .link > a').click();
        cy.url().should('include','/blog/posts/');
    })
    it('Validar ruta de la sección TIP: Ensuring your team uses YARN/NPM', function() {
        cy.get(':nth-child(2) > .link > a').click();
        cy.url().should('include','/blog/posts/');
    })
    it('Validar ruta de la sección Testing Buffalo Applications', function() {
        cy.get(':nth-child(3) > .link > a').click();
        cy.url().should('include','/blog/posts/');
    })
    it('Validar ruta de la sección A fridge contains drinks', function() {
        cy.get(':nth-child(4) > .link > a').click();
        cy.url().should('include','/blog/posts/');
    })
    it('Validar ruta de la sección How to mock an external service for tests in GO', function() {
        cy.get(':nth-child(5) > .link > a').click();
        cy.url().should('include','/blog/posts/');
    })
    it("Validar ruta de la sección How's it like to write an Android app in 2019?", function() {
        cy.get(':nth-child(6) > .link > a').click();
        cy.url().should('include','/blog/posts/');
    })
    //Validar la paginación
    it('Validar ruta de la sección Want to know more about us?', function() {
        cy.get('.btn').click();
        cy.url().should('include','/page');
    })
    it('Validar ruta de la sección Want to know more about us?', function() {
        cy.get('.cta-white').click();
        cy.url().should('include','/contact');
    })
    //Validar las categorías de Product Development
    it('Validar que muestre las entradas de la categoría Product Development', function() {
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('something about the error')
            done()
            return false
        })
        cy.get('.filters > .d-flex > :nth-child(2)').click();
        cy.get(':nth-child(1) > .head > .tags > .tag > a').should('have.attr','href').and('eq','https://wawand.co/tags/product-development');
        cy.get(':nth-child(2) > .head > .tags > .tag > a').should('have.attr','href').and('eq','https://wawand.co/tags/product-development');
        cy.get(':nth-child(3) > .head > .tags > :nth-child(1) > a').should('have.attr','href').and('eq','https://wawand.co/tags/product-development');
        cy.get(':nth-child(4) > .head > .tags > .tag > a').should('have.attr','href').and('eq','https://wawand.co/tags/product-development');
        cy.get(':nth-child(5) > .head > .tags > .tag > a').should('have.attr','href').and('eq','https://wawand.co/tags/product-development');
    })
    //Validar las categorías de Software Development
    it('Validar que muestre las entradas de la categoría Software Development', function() {
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('something about the error')
            done()
            return false
        })
        cy.get('.filters > .d-flex > :nth-child(3)').click();
        cy.get(':nth-child(1) > .head > .tags > li:nth-child(1) > a').should('have.attr','href').and('eq','https://wawand.co/tags/software-development');
        cy.get(':nth-child(2) > .head > .tags > li:nth-child(1) > a').should('have.attr','href').and('eq','https://wawand.co/tags/software-development');
        cy.get(':nth-child(3) > .head > .tags > li:nth-child(1) > a').should('have.attr','href').and('eq','https://wawand.co/tags/software-development');
        cy.get(':nth-child(4) > .head > .tags > li:nth-child(1) > a').should('have.attr','href').and('eq','https://wawand.co/tags/software-development');
        cy.get(':nth-child(5) > .head > .tags > li:nth-child(1) > a').should('have.attr','href').and('eq','https://wawand.co/tags/software-development');
        cy.get(':nth-child(6) > .head > .tags > li:nth-child(2) > a').should('have.attr','href').and('eq','https://wawand.co/tags/software-development');
    })
})
