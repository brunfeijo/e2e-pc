
import LandingPage from "../pageobjects/landingPage";
import AddNewComputerPage from "../pageobjects/AddNewComputerPage";

describe('Add new Computer', () => {
  beforeEach(() => {
    LandingPage.computerDataBasePage()
  })

  it('Click "Add a New Computer and Validates Fields', () => {

    LandingPage.addNewComputerClick()
    AddNewComputerPage.fieldValidations()
  })

  
  
})





