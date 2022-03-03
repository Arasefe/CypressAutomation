/// <reference types="cypress" />

describe("Iterate over elements", () => {
  const homepage = Cypress.env("automation-test");

  beforeEach(() => {
    cy.visit(`${homepage}`);
  });

  it("Log information of all hair care products", () => {
    cy.get('a[href*="product/category&path="]').contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      // $el is a wrapped jQuery element
      cy.log("Index: " + index + " : " + $el.text());
    });
  });

  it("Log information of all hair care products", () => {
    cy.get('a[href*="product/category&path="]').contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Curls to straight Shampoo")) {
        // wrap is used to convert $el to cypress and use all available methods
        cy.wrap($el).click();
      }
    });
  });
});
