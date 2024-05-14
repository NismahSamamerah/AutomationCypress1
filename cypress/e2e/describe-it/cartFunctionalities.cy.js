describe('check add to cart functionality', () => {
    before('',()=>{
       
            const email = "CypressUser@gmail.com"; 
            const password = "test@123"
            cy.loginToMagento(email,password)
        
    })
    beforeEach('',()=>{
        cy.visit("/");
            cy.get("#search").type("Circe Hooded Ice Fleece"+"{enter}") 
            cy.get('.product-items').find('li').first().click();
            cy.get('#option-label-size-143-item-168').click();
            cy.get('#option-label-color-93-item-57').click();
            cy.get("#qty").should("have.value",1);
            cy.get('#product-addtocart-button').click();   
            // cy.get('.counter-number').should("be.visible").and('contain','1');
        
    })
// it('validate that the user can add products to the shopping cart', () => {
//     cy.get("#search").type("Circe Hooded Ice Fleece"+"{enter}") 
//     cy.get('.product-items').find('li').first().click();
//     cy.get('#option-label-size-143-item-168').click();
//     cy.get('#option-label-color-93-item-57').click();
//     cy.get("#qty").should("have.value",1);
//     cy.get('#product-addtocart-button').click();
//     // cy.get('.counter-number').should("be.visible").and('contain','1');
// })

it('validate that the user can delete products from the shopping cart', () => {
    
    cy.get(".showcart").click();
    cy.get( '.action-delete').click();
    cy.get('.counter-number').should('be.hidden');

})

it.only('validate that the user can update products in the shopping cart', () => {
    
    cy.get(".showcart").click();
    cy.get( '[.action-edit]').click();
    cy.get('#option-label-size-143-item-166').click();
    cy.get('#option-label-color-93-item-53').click();
    cy.get("#qty").clear().type(2);
    cy.get('#product-updatecart-button').click();
    cy.get('[role=alert]').should("be.visible").and("contain",'Circe Hooded Ice Fleece was updated in your shopping cart')
    
})

});