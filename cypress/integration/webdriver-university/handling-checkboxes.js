/// <reference types="cypress" />

describe("Handling checkboxes", () => {
  it("Check and validate checkboxes", () => {
    // Open webdriveruniversity homepage
    cy.visit("http://www.webdriveruniversity.com");
    // In order for openning the tab inside the current window we need to remove the target attribute and value JQuery Method of removeAttrb
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    // cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");

    cy.get("#checkboxes > :nth-child(1) > input").as("Option-1");
    cy.get("@Option-1").check().should("be.checked");
  });

  it.only("Uncheck and validate checkboxes", () => {
    // Open webdriveruniversity homepage
    cy.visit("http://www.webdriveruniversity.com");
    // In order for openning the tab inside the current window we need to remove the target attribute and value JQuery Method of removeAttrb
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get(":nth-child(5) > input").as("Option-3");
    cy.get("@Option-3").should("be.checked");
    // Check the Option-3
    cy.get("@Option-3").uncheck().should("not.be.checked");
  });

  it.only("Check multiple checkboxes", () => {
    // Open webdriveruniversity homepage
    cy.visit("http://www.webdriveruniversity.com");
    // In order for openning the tab inside the current window we need to remove the target attribute and value JQuery Method of removeAttrb
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("input[type='checkbox']").as("checkbox");
    cy.get("@checkbox")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
