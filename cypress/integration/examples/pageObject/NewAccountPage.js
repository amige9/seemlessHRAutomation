class NewAccountPage {
    constructor() {
        this.accountLocator = "a[href='openaccount.htm']";
        this.selectLocator = "#type"
        this.newAccountButton = "form > div > .button";
        this.messageLocator = "div[id='openAccountResult'] h1[class='title']";
    }

    // Method to click on "Open New Account" link
    clickNewAccount() {
        cy.get(this.accountLocator).click(); 
    }

    // Method to select account type
    selectAccountType() {
        cy.get(this.selectLocator).select('SAVINGS');  
    }

    // Method to click open new account button
    clickOpenNewAccountButton(){
        cy.get(this.newAccountButton).should('be.visible').click();
    }

    // Method to assert if new account was opened successful
    assertAccountIsOpenedSuccessful(){
        cy.get(this.messageLocator).should('have.text', 'Account Opened!')
    }
}

export default NewAccountPage;
