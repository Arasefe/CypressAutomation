/// <reference types="cypress" />

describe("Inspect Automation Test Store Items", () => {
  const homepage = Cypress.env("automation-test");
  const firstName = Cypress.env("first_name");
  const lastName = Cypress.env("last_name");
  const email = Cypress.env("email");
  const message = Cypress.env("message");
  beforeEach(() => {
    cy.visit(`${homepage}`);
  });

  it("Click on the first item", () => {
    cy.get(`${homepage}`);
    cy.get('[title="Skinsheen Bronzer Stick"]')
      .click()
      .then((item) => {
        console.log(`Selected Item: ${item}`);
      });
  });

  it("Click on the first item using item text", () => {
    cy.get(`${homepage}`);
    cy.get("a.productname").contains("Skinsheen Bronzer Stick");
  });
});
