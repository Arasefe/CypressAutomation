/// <reference types="cypress" />

describe("Handle JS Alerts", () => {
  it("Confirm JS Alerts contain the correct text", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Open Popup-Alerts page in the same page
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Popup-Alerts");
    // Cypress by default automatically handles JS Alerts
    cy.get("#button1").click();
    // Manually handle JS Information Alert
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("Validate JS Confirm Alert works correctly when clicking text OK", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Open Popup-Alerts page in the same page
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Popup-Alerts");
    // Cypress by default automatically handles JS Alerts
    cy.get("#button4").click();
    // Manually handle JS Confim Alert
    cy.on("window:alert", (str) => {
      return true;
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  it("Validate JS Confirm Alert works correctly when clicking text cancel", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Open Popup-Alerts page in the same page
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Popup-Alerts");
    // Cypress by default automatically handles JS Alerts
    cy.get("#button4").click();
    // Manually handle JS Confim Alert
    cy.on("window:confirm", (str) => {
      return false;
    });
    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });

  it("Validate JS Confirm Alert works correctly using Stub", () => {
    cy.visit("http://www.webdriveruniversity.com");
    // Open Popup-Alerts page in the same page
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    // Verify the url
    cy.url().should("include", "Popup-Alerts");
    // Create a stub
    const stub = cy.stub();
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK!");
      });
  });
});
