/// <reference types="cypress" />

describe("Handling IFrame & Modals", () => {
  it("Handle Webdriveruni iframe and modal", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Open Window in the same window
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });
    // Handling IFrame
    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });
    cy.get("@iframe").find("#button-find-out-more").click();

    cy.get("@iframe").find("#myModal").as("modal");

    cy.get("@modal").should(($expectedText) => {
      // jQuery Method text() to retrieve text
      const text = $expectedText.text();
      expect(text).to.include(
        "Welcome to webdriveruniversity.com we sell a wide range of electrical goods"
      );
    });
  });
});
