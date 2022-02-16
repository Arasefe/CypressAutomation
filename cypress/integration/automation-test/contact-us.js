/// <reference types="cypress" />

describe("Test Contact", () => {
  const homepage = Cypress.env("automation-test");
  const firstName = Cypress.env("first_name");
  const lastName = Cypress.env("last_name");
  const email = Cypress.env("email");
  const message = Cypress.env("message");
  beforeEach(() => {
    cy.visit(`${homepage}`);
  });

  it("Positive Test of adding contact", () => {
    cy.scrollTo("bottom");
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=content/contact"]'
    ).click();
    cy.get('[name="first_name"]').clear().type(`${firstName}`);
    cy.get('[id="ContactUsFrm_email"]').clear().type(`${email}`);
    cy.get('[id="ContactUsFrm_enquiry"]').clear().type(`${message}`);
    cy.get('[title="Submit"]').click({ log: true });
  });

  it("Negative Test of adding contact", () => {
    cy.scrollTo("bottom");
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=content/contact"]'
    ).click();
    cy.get('[name="first_name"]').clear().type(`${firstName}`);
    // cy.get('[id="ContactUsFrm_email"]').clear().type(`${email}`);
    cy.get('[id="ContactUsFrm_enquiry"]').clear().type(`${message}`);
    cy.get('[title="Submit"]').click({ log: true });
  });
});
