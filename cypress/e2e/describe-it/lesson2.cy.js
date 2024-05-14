/// <reference types="cypress" />

describe("Lesson2",()=>{

    it('Selectors', () => {
        cy.visit("/");

        cy.get(".authorization-link a").first().click();
       
        cy.get("#search").type("bag");

        cy.get(".showcart").click();

        cy.get(".nav-1 span").click();
 
    });
 
});