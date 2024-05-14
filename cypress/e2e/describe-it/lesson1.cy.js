/// <reference types="cypress" />

describe("Lesson1",()=>{
   it("Visit Pages in Magento site ", ()=>{
        // visit home page in magento website using baseUrl
        cy.visit("/");

        // visit What is new page in magento website using baseUrl
        cy.visit("/what-is-new.html")

        // visit create account page in magento website using baseUrl
        cy.visit("/customer/account/create/") 

        // visit What is new page in magento website using full path 
        cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");

        // visit create account page in magento website using full path 
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
    });

    /**
     * Steps for Test case 
     * 1- open the website
     * 2- enter valid email 
     * 3- enter valid password 
     * 4- click on login button 
     * 5- the user will be redirected to my account page 
     */
    it.only("Validate that the user can login to magento site",()=>{

        cy.visit("/customer/account/login/");

        // Selectors  
        // id =>    #idName 
        // class => .className 
        // attribute => [attribute=value] 

        cy.get("#email").type("CypressUser@gmail.com")
        cy.get("#pass").type("test@123")
        cy.get("[name='send']").click()

        // Assertion with should 
        cy.get(".page-title").should("contain","My Account")
    })

});