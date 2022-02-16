/// <reference types="cypress" />

describe("Test Contact", () => {
  const homepage = Cypress.env("homepage-webdriver-uni");
  const firstName = Cypress.env("first_name");
  const lastName = Cypress.env("last_name");
  const email = Cypress.env("email");
  const message = Cypress.env("message");
  beforeEach(() => {
    cy.visit(`${homepage}`);
  });

  it("Positive Test of adding contact", () => {
    cy.get('[name="first_name"]').clear().type(`${firstName}`);
    cy.get('[name="last_name"]').clear().type(`${lastName}`);
    cy.get('[name="email"]').clear().type(`${email}`);
    cy.get('[name="message"]').clear().type(`${message}`);
    cy.get('[type="submit"]').click({ log: true });
  });

  it("Negative Test of adding contact", () => {
    cy.get('[name="first_name"]').clear().type(`${firstName}`);
    cy.get('[name="last_name"]').clear().type(`${lastName}`);
    // cy.get('[name="email"]').clear().type(`${email}`);
    cy.get('[name="message"]').clear().type(`${message}`);
    cy.get('[type="submit"]').click({ log: true });
  });
});
