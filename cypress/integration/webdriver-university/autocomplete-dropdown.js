/// <reference types="cypress" />

describe("Handling autocomplete dropdowns in webdriveruni", () => {
  it("Select specific values via autocomplete list", () => {
    // Open webdriveruniversity homepage
    cy.visit("http://www.webdriveruniversity.com");
    // In order for openning the tab inside the current window we need to remove the target attribute and value JQuery Method of removeAttrb
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });
    // Type A and wait for autocomplete
    cy.get("#myInput").type("A");
    // Select Avacado from dropdown list
    cy.get("#myInputautocomplete-list > *")
      .each(($el, $list) => {
        const product = $el.text();
        const prodToSelect = "Avacado";
        if (product === prodToSelect) {
          $el.click();
          cy.get("#submit-button").click();
          cy.url().should("include", prodToSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("g");
        cy.get("#myInputautocomplete-list > *").each(($el, $list) => {
          const product = $el.text();
          const prodToSelect = "Garlic";
          if (product === prodToSelect) {
            $el.click();
            cy.get("#submit-button").click();
            cy.url().should("include", prodToSelect);
          }
        });
      });
  });

  it("Select specific values via autocomplete list challenge", () => {
    // Open webdriveruniversity homepage
    cy.visit("http://www.webdriveruniversity.com");
    // In order for openning the tab inside the current window we need to remove the target attribute and value JQuery Method of removeAttrb
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });
    // Type g and wait for autocomplete
    cy.get("#myInput").type("f");
    // Select Garlic from dropdown list
    cy.get("#myInputautocomplete-list > *").each(($el, $list) => {
      const product = $el.text();
      const prodToSelect = "French+dip";
      if (product === prodToSelect) {
        // $el.click(); this is deprecated
        $el.trigger("click");
        cy.get("#submit-button").click();
        cy.url().should("include", prodToSelect);
      }
    });
  });
});
