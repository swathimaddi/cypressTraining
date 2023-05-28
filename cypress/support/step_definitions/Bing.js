import {
  Given,
  When,
  Then,
  Before,
  After,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.log("Before Hook....");
});

After(() => {
  cy.log("After Hook....");
});
Given("User is on Bing home page", () => {
  cy.visit("https://www.bing.com");
  cy.title().should("eq", "Bing");
});

When("User types a word as {string}", (txt) => {
  //cy.get("cy.get('[placeholder='Search the web']')").select(search,{force:true})
  cy.get("#sb_form_q").type(txt + "{downarrow}", { delay: 1000 });
  cy.wait(2000)
});

When("User should be able to select from list", () => {
  cy.get("div>#sa_ul>li").contains("cypress").click();
  cy.wait(3000)
});
Then("Search result should be displayed on the page", () => {
// cy.get(".sb_count").then(txt => {
//     cy.log(txt);
// })s
cy.get(".sb_count").should('contain', 'results')

//cy.xpath("//span[@class='sb_count']").should('contain', 'results')
//cy.xpath("//span[contains(text(), 'results')]").should('be.visible')
 //cy.get("#sb_form_q").should('have.text', 'cypress')
 
});
