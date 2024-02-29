class LandingPage {



    computerDataBasePage() {

        cy.visit('/')
    }


    topUrlValidation() {

        cy.get('h1.fill > .fill').should('have.text', 'Computer database');


    }

    searchBoxValidations() {

        cy.get('#searchbox').should('have.attr', 'type', 'search');
        cy.get('#searchbox').should('be.visible');
        cy.get('#searchbox').should('be.enabled');


    }


    searchBoxType() {

        cy.get('#searchbox').type('ARRA')
        


    }


    searchButtonValidations() {

        cy.get('#searchsubmit').should('be.enabled');


    }

    addNewComputerButton() {

        cy.get('#add').should('be.visible');


    }

    addNewComputerClick() {

        cy.get('#add').click()
        

    }

    navigationButtonsValidation() {

        cy.get('.prev > a').should('have.text', '← Previous');
        cy.get('.next > a').should('have.text', 'Next →');

    }


    tableLenghtValidation() {

        cy.get('table.computers.zebra-striped tbody tr').its('length').should('eq', 10);
    }

    filterByNameClick() {


        cy.get('#searchsubmit').click()


    }



}

export default new LandingPage();

