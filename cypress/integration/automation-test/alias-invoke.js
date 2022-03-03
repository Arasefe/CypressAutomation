/// <reference types="cypress" />

describe("Alias and invoke tets", () => {
  const homepage = Cypress.env("automation-test");

  beforeEach(() => {
    cy.visit(`${homepage}`);
  });

  it("Validate specific hair product", () => {
    cy.get('a[href*="product/category&path="]').contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");

    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Validate product thumbnail size", () => {
    cy.get(".thumbnail").as("productThumbnail");
    // Assert that thumbnail size is 16
    cy.get("@productThumbnail").should("have.length", 16);
    // Assert that cart icon contains a title of Add to Cart
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it("Calculate total price of normal and sale products", () => {
    cy.get(".thumbnail").as("productThumbnail");
    // Assert that thumbnail size is 16
    // cy.get("@productThumbnail")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());
    //   });
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get("@itemPrice").then(($linkText) => {
      var itemPrice = $linkText.split("$");
      var i;
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
      }
    });
  });
});
