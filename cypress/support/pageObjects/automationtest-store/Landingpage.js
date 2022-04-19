class Landingpage{
    gotoLandingpage(){
        cy.visit(Cypress.config().baseUrl)
    }

}

export default Landingpage;