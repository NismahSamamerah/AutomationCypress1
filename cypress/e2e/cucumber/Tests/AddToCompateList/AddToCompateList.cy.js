/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Given("The user navigate to magento website",()=>{
//     cy.visit("")
// });

// And("the user select watches option",()=>{
//     // cy.get("#ui-id-27")
    
// });

Given("The user navigate to magento website",()=>{
    cy.visit("/")
});
Given("the user select watches option",()=>{
    cy.get("#ui-id-6").click()
});
When("the user click on add to compare icon",()=>{
    
});
Then("The product will be added to compare list successfuly",()=>{
    
});
