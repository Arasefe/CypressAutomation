import Homepage from '../../support/pageObjects/webdriver-uni/Homepage';
import Contactus from '../../support/pageObjects/webdriver-uni/Contactus';

/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  const homePage = new Homepage();
  const contactus = new Contactus();
  before(() => {
    cy.fixture("example").then((data) => {
      //this.data = data;
      globalThis.data = data;
    });

    beforeEach(() => {
      homePage.visitHomepage();
      homePage.clickOnContactUsButton();
    })

  });
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    contactus.contactForm_Submission(Cypress.env('first_Name'), data.last_name, data.email, "How can I learn Cypress?", "h1", "Thank You for your Message!");

  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    contactus.contactForm_Submission(Cypress.env('first_Name'), data.last_name, data.email,"How can I learn Cypress?", "h1", "This is weird though!");
  });
});
