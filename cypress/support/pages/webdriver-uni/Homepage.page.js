class Homepage{
    visitHomepage(){
        cy.visit(Cypress.config().baseUrl);
    }

    clickOnContactUsButton(){
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true});
    }

}

export default Homepage;