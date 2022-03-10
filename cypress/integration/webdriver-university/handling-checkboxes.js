/// <reference types="cypress" />

describe("Handling checkboxes", () => {
  it("Handling checkboxes", () => {
    // Open webdriveruniversity homepage
    cy.visit("http://www.webdriveruniversity.com");
    // In order for openning the tab inside the current window we need to remove the target attribute and value JQuery Method of removeAttrb
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
});
