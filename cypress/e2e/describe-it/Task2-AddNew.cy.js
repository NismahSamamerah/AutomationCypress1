/// <reference types="cypress" />
describe('check add new product functionality', () => {
    before(()=>{
        const email = "admin@yourstore.com"; 
        const password = "admin";
        cy.loginTOnopcommerce(email,password);
        cy.get('.nav-item').find('a').contains('Products').click({force: true});
        
    })
    it('validate that the admin user can add new product',()=>{
        cy.get('.btn-primary').contains('Add new').click();
        cy.wait(3000);
        cy.get('#Name').type('LaptopHP');
        cy.screenshot({capture:'runner'});
        cy.get('#SelectedCategoryIds').select(0,{force: true})
        cy.get('#Price').clear().type(3000)
        cy.get('[name="save"]').click();
        cy.get(".alert").should("be.visible").and("contain","The new product has been added successfully.")
        
    })
})