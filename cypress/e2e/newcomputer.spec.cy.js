
import LandingPage from "../pageobjects/landingPage";
import AddNewComputerPage from "../pageobjects/AddNewComputerPage";

describe('Add new Computer', () => {
  before(() => {
    cy.visit('/')
  })

  it('Click "Add a New Computer and Add One', () => {

    LandingPage.addNewComputerClick()
    AddNewComputerPage.fieldValidations()
    AddNewComputerPage.fillFieldsAndCLickonCreathisComputerButton();

  })

})





