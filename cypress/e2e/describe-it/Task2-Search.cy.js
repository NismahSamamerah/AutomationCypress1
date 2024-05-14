/// <reference types="cypress" />
describe('check add new product functionality', () => {
    before(()=>{
        const email = "admin@yourstore.com"; 
        const password = "admin";
        cy.loginTOnopcommerce(email,password);
        cy.get('.nav-item').find('a').contains('Products').click({force: true});
        cy.get('.btn-primary').contains('Add new').click();
        cy.wait(3000);
        cy.get('#Name').type('LaptopHP');
        cy.get('#SelectedCategoryIds').select(0,{force: true})
        cy.get('#Price').clear().type(3000)
        cy.get('[name="save"]').click();
        
    })
    it('validate that the admin user can Search for product',()=>{
        
        cy.get('#SearchProductName').type('LaptopHP')
        cy.get('#search-products').click();
        cy.get("tbody").find("tr").first().find("td").eq(2).should("contain","LaptopHP");
        
    })
    
})