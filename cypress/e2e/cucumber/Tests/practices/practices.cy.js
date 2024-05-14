/// <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";

// Before  -> beforeEach
// After  => afterEach 
// before => beforeAll 
// after => afterall 

// Before({tags:"@TC-111"},()=>{
//     cy.log("Hello from scenario 1")
// })

// Before({tags:"@TC-111 or @TC-222"},()=>{
//     cy.log("Hello from scenario 1")
// })

// Before({tags:"@TC-111 and @test1"},()=>{
//     cy.log("Hello from scenario 1")
// })

Given("The user navigate to magento website",()=>{
    cy.visit("/");
});

// .then((element)=>{

// })

const person = {
    name:"Razan",
    lastName:"Balatiah",
    isQA:true,
    isWatchingTv(){
        console.log("Yes")
    }
}

// const message = "Test";

// cy.wrap(person).find("").click().
// cy.wrap(message)

// cy.wrap(person).its("name").should("contain","Razan")
// cy.wrap(person).invoke('isWatchingTv').then(()=>{

// })

Then("The products in hot seller section are available",()=>{
    cy.get(".product-item-name a").then((products)=>{
        // cy.log(products.length)
        for (let i = 0; i < products.length; i++) {
            cy.wrap(products[i]).invoke('text').then((productName)=>{
                cy.log(productName)
        })
    }
})
})

When("Click on Gear menu and choose watches option",()=>{
    cy.get('#ui-id-6').click();
    cy.get('ol.items').contains('a','Watches').click();
    cy.wait(1000);
    cy.get('#mode-list').click();
})  
When('add all watches with price > 50 to compare list',()=>{
    cy.get('.price-final_price').find('span.price').then((prices)=>{
        for(let i=0;i<prices.length;i++){
            cy.wrap(prices[i]).invoke('text').then((productPrice)=>{
                let finalPrice = parseInt(productPrice.replace('$',''))
                if(finalPrice >50){
                    cy.wrap(prices[i]).parents(".price-box").next().find("a.tocompare")
                    .click({force:true})
                }
            })
        }
    })
})
// Then('the products will be added successfuly to the compare list',()=>{
//     cy.get('[role=alert]').should("be.visible").and("contain",'You added product Dash Digital Watch to the comparison list.')
// })
Given("The user navigate to magento website",()=>{
    cy.visit("/");
});
When('Click on Whats new',()=>{
    cy.log('p');
    cy.get('#ui-id-3').click();
    cy.contains("strong" ,"New in women's").next().find('a').then((WomensCatogores)=>{
        for(let i=0; i<WomensCatogores.length; i++){
            cy.wrap(WomensCatogores[i]).invoke('text').then((catogoryName)=>{
                cy.log(catogoryName);
            })
        }
    });
})
