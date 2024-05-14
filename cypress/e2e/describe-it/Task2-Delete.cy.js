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
        cy.get('#SearchProductName').type('LaptopHP')
        cy.get('#search-products').click();
        
    })
    it('validate that the admin user can Delete a product',()=>{
        cy.get('#SearchProductName').clear().type('LaptopHP')
        cy.get('#search-products').click();
        cy.get('.sorting_disabled').find('input').check({force: true});
        cy.get('#delete-selected').click(); 
        cy.get('#delete-selected-action-confirmation-submit-button').click();
        cy.get('.dataTables_empty').should("be.visible").and("contain","No data available in table")
    })
})