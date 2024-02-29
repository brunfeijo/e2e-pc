
import LandingPage from "../pageobjects/landingPage";
import EditPage from "../pageobjects/EditPage";

describe('Searches and Edit a Computer', () => {
    before(() => {
        cy.visit('/')
    })

    it('Searches a Computer Name', () => {

        LandingPage.searchBoxType();
        LandingPage.filterByNameClick();
        EditPage.searchResult();
        EditPage.deleteThisComputerButton();
        


    })

})





