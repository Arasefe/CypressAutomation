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

  it("Navifgating to specific product pages", () => {
    cy.get(`${homepage}`);
    const makeuplink = cy
      .get('a[href*="product/category&path"]')
      .contains("Makeup");
    const skincarelink = cy
      .get('a[href*="product/category&path"]')
      .contains("Skincare");
    makeuplink.click();
    skincarelink.click();
  });

  it("Click on the first item using item text", () => {
    cy.get(`${homepage}`);
    cy.get("a.productname").contains("Skinsheen Bronzer Stick");
  });
});
