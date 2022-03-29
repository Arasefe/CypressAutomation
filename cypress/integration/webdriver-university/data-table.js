/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("Calculate and assert the total age of all users", () => {
    var userDetails = [];
    let totalAge = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        var i;
        for (i = 0; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            totalAge += Number(userDetails[i]);
          }
        }
        cy.log("Found total age: " + totalAge);
        expect(totalAge).to.eq(322);
      });
  });

  it("Calculate and assert the age of a given user based on last name", () => {
    // Find the age of Woods
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      // Retrieve with jQuery text()
      const lastName = $el.text();
      if (lastName.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (age) {
            const userAge = age.text();
            expect(userAge).to.equal("80");
          });
      }
    });
  });
});
