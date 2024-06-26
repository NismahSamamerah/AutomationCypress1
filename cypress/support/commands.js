// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginToMagento',(email,password)=>{
    cy.visit("/customer/account/login/");
    cy.get("#email").type(email)
    cy.get("#pass").type(password)
    cy.get("#send2").click();
})

Cypress.Commands.add('loginTOnopcommerce',(email ,password)=>{
    cy.visit("https://admin-demo.nopcommerce.com/Admin/login");
    cy.get("#Email").clear().type(email)
    cy.get("#Password").clear().type(password)
    cy.get(".button-1").click();
})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })