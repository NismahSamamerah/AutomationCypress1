/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigate to magento website",()=>{
    cy.visit("/customer/account/login")
});

When("The user type email in email input field",()=>{
    cy.get("#email").type("CypressUser@gmail.com")
});

When("The user type password in password input field",()=>{
    cy.get("#pass").type("test@123")
});

When("The user click on sign in button",()=>{
    cy.get("#send2").click()
});

Then("The user will redirected to my account page",()=>{
    cy.get(".page-title").should("contain","My Account")
});