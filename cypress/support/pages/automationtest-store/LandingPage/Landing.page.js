class Landingpage{
    elements = {
        firtsNameField:()=>cy.get('[name="first_name"]'),
        emailField:()=>cy.get('[id="ContactUsFrm_email"]'),
        enquiryField:()=>cy.get('[id="ContactUsFrm_enquiry"]'),
        submitField:()=>cy.get('[title="Submit"]'), 
    }
    gotoLandingpage(){
        cy.visit(Cypress.config().baseUrl)
    }

}

export default Landingpage;