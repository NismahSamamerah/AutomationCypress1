/// <reference types="cypress" />
// describe('Check create account form in magento website', () => {
//     it('', () => {
//         cy.visit("/customer/account/create/"); // pre-condition (Given)
//         cy.get('h1').should("be.visible");
//         cy.get(' Personal Information').should("be.visible")
//         cy.get('span').contains(' Personal Information').should("be.visible")
//         cy.get('span').contains('Sign-in Information').should("be.visible")

//         cy.get('#firstname').should("be.visible");
//         cy.get('#lastname').should("be.visible");
//         cy.get('[type=email]').should("be.visible");
//         cy.get('#password').should("be.visible");
//         cy.get('#password-confirmation').should("be.visible");
//         cy.get("button").contains('Create an Account');
//     })

//     it('Validate that the user can create account', () => {
//         // pre-condition (Given)
//         cy.visit("/customer/account/create/"); 
//         cy.get('#firstname').type("nismah");
//         cy.get('#lastname').type("samamerah");
//         cy.get('#email_address').type("nismah2@gmail.com");
//         cy.get('#password').type("Nismah123");
//         cy.get('#password-confirmation').type("Nismah123");
//         cy.get("button").contains('Create an Account').click();
//         cy.get('#qty').should()
//         // cy.get(".authorization-link").find('a').should("have.text","Welcome, nismah samamerah!")
//     })


// })

/// <reference types="cypress" />
describe('Check create new account form in magento website', () => {
    
    beforeEach(()=>{
        // before execution each test case 
        cy.visit("/customer/account/create/");
    });
    
    it('verify that all fields are visible in create new account form', () => {
        
        // assertions 
        cy.get(".page-title").should("be.visible");
        cy.contains("span","Personal Information").should("be.visible");
        cy.contains("span","Sign-in Information").should("be.visible");
    
        cy.get("[for=firstname]").should("be.visible");
        cy.get("[for=lastname]").should("be.visible");
        cy.get("[for=email_address]").should("be.visible");
        cy.get("[for=password]").should("be.visible");
        cy.get("[for=password-confirmation]").should("be.visible");

        cy.get("#password-strength-meter").should("be.visible")
        .and("contain","Password Strength")

        cy.get("button").contains("Create an Account").should("be.visible");

        cy.get("#firstname").should("be.visible");
        cy.get("#lastname").should("be.visible");
        cy.get("#email_address").should("be.visible");
        cy.get("#password").should("be.visible");
        cy.get("#password-confirmation").should("be.visible");

        cy.get(".fieldset.create.account").should("have.attr","data-hasrequired","* Required Fields")
    });

    it('Validate that the user can create a new account', () => {
        
        //  Math.random() // 0-8  ,  0.1 , 0.43  
        const emailNum = Math.floor(Math.random()*1000); // 0 - 999

        // Actions
        cy.get("#firstname").type("nismah")
        cy.get("#lastname").type("samamerah")
        cy.get("#email_address").type("nismah"+emailNum+"@gmail.com")


        cy.get("#password").type("test@123")
        cy.get("#password-confirmation").type("test@123")
        cy.contains("button","Create an Account").click();

        //Assertions |
        cy.wait(1000)
        cy.get("[role=alert]").should("be.visible").and("contain","Thank you for registering with Main Website Store")
        cy.get(".page-title").should("contain","My Account")
        cy.get(".logged-in").first().should("contain","Welcome, nismah samamerah!")
    });
});