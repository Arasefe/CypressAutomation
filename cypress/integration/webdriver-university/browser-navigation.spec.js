/// <reference types="cypress" />

describe("Validate Webdriveruni homepage links", () => {
  it("Confirm links redirect to the correct pages", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "contactus");

    // Navidate back forward and refresh
    cy.go("back");
    cy.reload();
    cy.url().should("include", "http://www.webdriveruniversity.com");
    // cy.reload(true);      // reloads without using cache
    cy.go("forward");
    cy.url().should("include", "contactus");
  });
});
