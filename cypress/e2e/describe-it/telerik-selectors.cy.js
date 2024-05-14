/// <reference types="cypress" />
describe('Selectors', () => {
    it('Find selectors for html elements', () => {
        cy.visit("https://www.telerik.com/support/demos");
        cy.get("h1").contains("Demos");
        cy.get(".NavAlt-anchor").eq(3)
        cy.get("#conversational-ui");
        cy.get(".TK-Footer-List").eq(1).find(".TK-Footer-List-Item a").eq(4);
        cy.get(".TK--Footer-Desktop .TK-Footer-List-Social").find("li");
        cy.get(".TK--Footer-Desktop .TK-Footer-List-Social").children()
    });
});