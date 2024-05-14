import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigate to magento website",()=>{
    cy.visit("/customer/account/login")
});
And("The user type product name in the search feild",()=>{
    cy.get("#search").type("shirt"+"{enter}");
    cy.contains("a","Circe Hooded Ice Fleece").click();
});
When("The user click on reviews in button",()=>{
    cy.get("#tab-label-reviews-title").click();
});
And("The user type rating",()=>{
    cy.get("#Rating_4_label").click();
});
And("The user type Nickname in Nickname field",()=>{
    cy.get("#nickname_field").type("nismah");
});
And("The user type Summery in Summery field",()=>{
    cy.get("#summary_field").type("ooooo");
});
And("The user type Review in Nickname Review",()=>{
    cy.get("#review_field").type("amazing");
});
And("The user click  on Submit Review",()=>{
    cy.get(".action submit primary").click();
});
Then("the review will be Submited",()=>{
    cy.get("[role=alert]").should("contain",message)
});


