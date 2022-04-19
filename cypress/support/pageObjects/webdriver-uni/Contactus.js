class Contactus {
    contactForm_Submission(first_name, last_name, email, $selector, textToLocate) {
        cy.get('[name="first_name"]').type(first_name);
        cy.get('[name="last_name"]').type(last_name);
        cy.get('[name="email"]').type(email);
        cy.get("textarea.feedback-input").type("How can I learn Cypress?");
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(textToLocate);
    }
}

export default Contactus;