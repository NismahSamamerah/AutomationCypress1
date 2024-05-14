/// <reference types="cypress" />

describe('Selectors', () => {
   it('Find Selectors', () => {
    cy.visit("https://codenboxautomationlab.com/practice/");
    cy.get(".menu-item").find("a").contains("Home");
    cy.contains("Automation Practice");
    cy.get("[type=search]").last()
    cy.get("[type=search]").last().next();
    cy.get("[value=radio2]");
    cy.get("#autocomplete");
    cy.get("#dropdown-class-example");
    cy.get("#text-6").find("p").eq(2);
    cy.get("[type=checkbox]")
    cy.get("input").filter("[type=checkbox]");
    cy.get("#opentab")
    cy.get("#openwindow")
    cy.contains("Switch To Alert Example");
    cy.get("#product").find("tr").eq(2).find("td").last();
   });
});