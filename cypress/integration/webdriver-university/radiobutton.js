/// <reference types="cypress" />

describe("Handling radiobuttons", () => {
  it("Verify radiobuttons in Webdriveruni", () => {
    // Open webdriveruniversity homepage
    cy.visit("http://www.webdriveruniversity.com");
    // In order for openning the tab inside the current window we need to remove the target attribute and value JQuery Method of removeAttrb
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("[id='radio-buttons']").find("[type='radio']").first().check();
    // Check radio button blue (Index number 1)
    cy.get("[id='radio-buttons']").find("[type='radio']").eq(1).check();

    // Check radio button purple (Index number 4)
    cy.get("[id='radio-buttons']").find("[type='radio']").eq(4).check();
  });

  it("Verify state of specific radio buttons", () => {
    // Open webdriveruniversity homepage
    cy.visit("http://www.webdriveruniversity.com");
    // In order for openning the tab inside the current window we need to remove the target attribute and value JQuery Method of removeAttrb
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    // Verify that the first radio button is not checked
    cy.get("[value='lettuce']").should("not.be.checked");
    // Check the first radio button
    cy.get("[value='lettuce']").check();
    // Verify that the second radio button is disabled
    cy.get("[value='cabbage']").should("be.disabled");
    // Verify that the third radio button is checked
    cy.get("[value='pumpkin']").should("not.be.checked");
    // Uncheck the third radio button
    cy.get("[value='pumpkin']").check();
  });
});
