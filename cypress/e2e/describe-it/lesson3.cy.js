/// <reference types="cypress" />

describe('Lesson3', () => {
    
    it('Contains command', () => {
        cy.visit("/");
        cy.get("ul.footer").find("li").contains("Advanced Search");
        cy.contains("Hot Sellers");
        cy.contains("As low as");
        cy.get(".price-label");
        cy.contains("span","Shop New Yoga")
    });

    it('position in list', () => {
       cy.visit("/");
       cy.get(".block-promo-wrapper").find("a").last(); 
       cy.get(".block-promo-wrapper a").first();
       cy.get(".block-promo-wrapper a").eq(2);
       cy.get(".block-promo-wrapper a").first().next();
       cy.get(".block-promo-wrapper").find("a").last().prev(); 
       cy.contains("span","Shop New Yoga").prev();
       cy.contains("span","Shop New Yoga").prev().next();
    });

    it('filter & not', () => {
        cy.visit("/");
        cy.get("li"); // 44 elements 
        cy.get("li").filter(".authorization-link");
        cy.get("li").filter(".level0")
        cy.get("li").not(".level0")

    });

    it.only('find & parent', () => {
        cy.visit("/")
        cy.get(".nav-6").find("a");
        cy.get(".nav-6").parent();
        cy.get(".nav-6").parent().parent();
        cy.get(".nav-6").parents();
    });

});