describe('Task1' ,()=>{
    it('Find Selectors',()=>{
        cy.visit("https://demo.productionready.io/#/register");
        cy.get('.navbar-light');
        cy.get('.navbar-light').find('a').first().find('a');
        cy.get('.navbar-light').find('li').last().find('a');
        cy.get('h1');
        cy.contains('Have an account?');
        cy.get('input').first();
        cy.get('input').eq(1);
        cy.get('[type=password]');
        cy.get('.btn');
        cy.get('footer').find('a').first();
        cy.get('footer span');
    })
})