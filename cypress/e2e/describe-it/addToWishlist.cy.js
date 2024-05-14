/// <reference types="cypress" />
describe('check add to cart functionality', () => {
    before(()=>{
        const email = "CypressUser@gmail.com"; 
        const password = "test@123"
        cy.loginToMagento(email,password)
    })

    it('validate that the user can add the product to thewishlist and take a screenshot for the full page after adding the product to wishlist',()=>{
        cy.visit("/");
        
            cy.get("#search").type("Circe Hooded Ice Fleece"+"{enter}") 
            cy.get('.product-items').find('li').first().click();
            cy.contains("a","Add to Wish List").click();
            cy.get(".page-title").should("contain","My Wish List")
            cy.get('[role=alert]').should("be.visible").and("contain",'Circe Hooded Ice Fleece has been added to your Wish List. Click here to continue shopping.')
    })
})