class EditPage {


    searchResult() {

        cy.get('tbody > tr > :nth-child(1)').should('have.text', 'ARRA');
        cy.get('tbody > tr > :nth-child(1)').should('be.visible');
        cy.get('tbody > tr > :nth-child(1) > a').click();

    }

    EditComputerPage() {


        cy.get('#name').should('have.value', 'ARRA');
        cy.get('#name').type('ARRA 2');
        cy.get('.primary').click()

    }

    editRibbonValidation() {


        cy.get('.alert-message').should('be.visible');
        cy.get('.alert-message').should('have.text', 'Done !  Computer ARRAARRA 2 has been updated');



    }
}

export default new EditPage();

