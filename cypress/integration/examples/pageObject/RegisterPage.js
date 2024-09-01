class RegisterPage {

    constructor() {
        this.registerButton = '#loginPanel > :nth-child(3) > a',
        this.firstNameLocator = "input[id='customer.firstName']"
        this.lastNameLocator = "input[id='customer.lastName']",
        this.addressLocator = "input[id='customer.address.street']",
        this.cityLocator = "input[id='customer.address.city']",
        this.stateLocator = "input[id='customer.address.state']",
        this.ZipCodeLocator = "input[id='customer.address.zipCode']",
        this.phoneLocator = "input[id='customer.phoneNumber']",
        this.SSNLocator = "input[id='customer.ssn']",
        this.usernameLocator = "input[id='customer.username']",
        this.passwordLocator = "input[id='customer.password']",
        this.confirmLocator = "#repeatedPassword",
        this.RegisterButtonLocator = "input[value='Register']"
        this.successMessageLocator = "div[id='rightPanel'] p"
        this.logoutLink = "a[href='logout.htm']";


    }

    // Method to visit the URL
    goToURL() {
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
        cy.title().should('eq', 'ParaBank | Register for Free Online Account Access')
    }

    // Method to click Register Button Link
    clickRegisterButton() {
        cy.get(this.registerButton).click();
    }

    // Method to fill registration form
    fillRegistrationForm(firstName, lastName, address, city, state, code, phone, ssn, username, password, confirm) {
        cy.get(this.firstNameLocator).type(firstName);
        cy.get(this.lastNameLocator).type(lastName);
        cy.get(this.addressLocator).type(address);
        cy.get(this.cityLocator).type(city);
        cy.get(this.stateLocator).type(state);
        cy.get(this.ZipCodeLocator).type(code);
        cy.get(this.phoneLocator).type(phone);
        cy.get(this.SSNLocator).type(ssn);
        cy.get(this.usernameLocator).type(username);
        cy.get(this.passwordLocator).type(password);
        cy.get(this.confirmLocator).type(confirm);
        cy.get(this.RegisterButtonLocator).click();
    }

    // Method to assert registration was successful
    assertRegistrationIsSuccessful() {
        cy.get(this.successMessageLocator).should('have.text',
            'Your account was created successfully. You are now logged in.')
    }

    // Method to log out
    clickLogoutLink() {
        cy.get(this.logoutLink).click();
    }

}

export default RegisterPage;