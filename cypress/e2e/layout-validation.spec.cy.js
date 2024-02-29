
import LandingPage from "../pageobjects/landingPage";

describe('Landing Page Validations', () => {
  beforeEach(() => {
    LandingPage.computerDataBasePage()
  })

  it('Top Bar URL Validations', () => {

    LandingPage.topUrlValidation()

  })

  
  it('Search Bar Validations', () => {

    LandingPage.searchBoxValidations()

  })

  it('Search Button Validations', () => {

    LandingPage.searchButtonValidations()

  })

  it('Add New Computer Button Validation', () => {

    LandingPage.addNewComputerButton()

  })

  it('Bottom Links Validation', () => {

    LandingPage.navigationButtonsValidation()

  })

  it('Table Lenght Validation', () => {

    LandingPage.tableLenghtValidation()

  })

})
