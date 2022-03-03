/// <reference types="cypress" />

describe("Test Contact", () => {
  const firstName = Cypress.env("first_name");
  const lastName = Cypress.env("last_name");
  const email = Cypress.env("email");
  const message = Cypress.env("message");
  it("Positive Test of adding contact", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // In order for openning the tab inside the current window we need to remove the target attribute and value JQuery Method of removeAttrb
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type(`${firstName}`);
    cy.get('[name="last_name"]').type(`${lastName}`);
    cy.get('[name="email"]').type(`${email}`);
    cy.get('[name="message"]').type(`${message}`);
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Negative Test of adding contact", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').type(`${firstName}`);
    cy.get('[name="last_name"]').type(`${lastName}`);
    cy.get("textarea.feedback-input").type(`${message}`);
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
