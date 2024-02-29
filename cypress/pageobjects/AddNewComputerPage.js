class AddNewComputerPage {

    fieldValidations() {

        cy.get(':nth-child(1) > label').should('have.text', 'Computer name');
        cy.get(':nth-child(2) > label').should('have.text', 'Introduced');
        cy.get(':nth-child(3) > label').should('have.text', 'Discontinued');
        cy.get(':nth-child(4) > label').should('have.text', 'Company');
        cy.get('#name').should('be.enabled');
        cy.get('#introduced').click();
        cy.get('#introduced').should('be.enabled');
        cy.get('#discontinued').click();
        cy.get('#discontinued').should('be.enabled');
        cy.get('#company').should('be.enabled');
        cy.get('.primary').should('be.enabled');


    }


    fillFieldsAndCLickonCreaThisComputerButton() {


        cy.get('#name').type('FeijoTest');
        cy.get('#introduced').type('1987-01-01');
        cy.get('#discontinued').type('2050-01-01');
        cy.get('#company').select('Apple Inc.') // Select the 'user-1' option
        cy.get('.primary').click();
        cy.get('.alert-message').should('be.visible');
        cy.get('.alert-message').should('be.visible');


    }


}

export default new AddNewComputerPage();

