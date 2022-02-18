/// <reference types="cypress" />

describe("Variables, Cypress and jquery Commands", () => {
  const homepage = Cypress.env("automation-test");
  const firstName = Cypress.env("first_name");
  const lastName = Cypress.env("last_name");
  const email = Cypress.env("email");
  const message = Cypress.env("message");
  beforeEach(() => {
    cy.visit(`${homepage}`);
  });

  it("Navigating to specific product pages", () => {
    const makeuplink = cy
      .get('a[href*="product/category&path"]')
      .contains("Makeup");
    makeuplink.click();

    const skincarelink = cy
      .get('a[href*="product/category&path"]')
      .contains("Skincare");

    skincarelink.click();
  });

  it("Navigating to specific product pages with Cypress recommended approach", () => {
    cy.get('a[href*="product/category&path"]').contains("Makeup").click();

    cy.get('a[href*="product/category&path"]').contains("Skincare").click();
  });

  it("Navigating to specific product pages ", () => {
    cy.get('a[href*="product/category&path"]').contains("Makeup").click();

    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log(`Found header text: ${headerText}`);
      expect(headerText).is.eq("Makeup");
    });
  });
});
