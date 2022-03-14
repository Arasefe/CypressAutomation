/// <reference types="cypress" />

describe("Handling dropdowns in webdriveruni", () => {
  it("Select specific values via select dropdown list", () => {
    // Open webdriveruniversity homepage
    cy.visit("http://www.webdriveruniversity.com");
    // In order for openning the tab inside the current window we need to remove the target attribute and value JQuery Method of removeAttrb
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    // Select java from first dropdown list
    cy.get("[id='dropdowm-menu-1']")
      .select("java")
      .should("have.value", "java");

    // Select TestNG from second dropdown list
    cy.get("[id='dropdowm-menu-2']").select("testng").contains("TestNG");

    // Select JQuery from third dropdown list
    cy.get("[id='dropdowm-menu-3']").select("jquery").contains("JQuery");
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
