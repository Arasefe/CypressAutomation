/// <reference types="cypress" />

describe("Variables, Cypress and jquery Commands", () => {
  const homepage = Cypress.env("automation-test");

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

  it.only("Validate properties of the Contact Us Page", () => {
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=content/contact"]'
    )
      .click()
      .then(() => {
        //const title = cy.title();
        expect(cy.title()).is.eq("Contact Us");
      });
    // Uses Cypress Commands and Chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    // JQuery Approach

    // Embedded Commands
  });
});
