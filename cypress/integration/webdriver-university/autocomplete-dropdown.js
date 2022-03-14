/// <reference types="cypress" />

describe("Handling autocomplete dropdowns in webdriveruni", () => {
  it("Select specific values via autocomplete list", () => {
    // Open webdriveruniversity homepage
    cy.visit("http://www.webdriveruniversity.com");
    // In order for openning the tab inside the current window we need to remove the target attribute and value JQuery Method of removeAttrb
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });
    // Type A and wait for autocomplete and select A from dropdown list
    cy.get("#myInput").type("A").should("have.value", "java");

    // Select A from dropdown list
    cy.get("#myInput").type("A").should("have.value", "java");
  });

  it("Validate specific dropdown ", () => {
    // Open webdriveruniversity homepage
    cy.visit("http://www.webdriveruniversity.com");
    // In order for openning the tab inside the current window we need to remove the target attribute and value JQuery Method of removeAttrb
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    // Select Maven from second dropdown list
    cy.get("[id='dropdowm-menu-2']")
      .select("maven")
      .should("have.value", "maven");

    // Select TestNG from second dropdown list
    cy.get("[id='dropdowm-menu-2']").select("TestNG").contains("TestNG");
  });
});
