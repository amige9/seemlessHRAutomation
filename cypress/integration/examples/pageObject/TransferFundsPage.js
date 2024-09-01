class TransferFundsPage {

    constructor() {
        this.transferFundLocator = "a[href='transfer.htm']";
        this.amountLocator = "#amount";
        this.fromAccountLocator = "#fromAccountId";
        this.toAccountLocator = "#toAccountId";
        this.transferButton = "input[value='Transfer']"
        this.successMessage = "div[id='showResult'] h1[class='title']"
    }

    // Method to click on Transfer Funds Link
    clickTransferFundsLink() {
        cy.get(this.transferFundLocator).click();
    }

    // Method to enter amount
    enterAmount(amount) {
        cy.get(this.amountLocator).type(amount);
        cy.wait(1000)
    }

    // Method to select from account
    selectFromAccount(account) {
        cy.get(this.fromAccountLocator).select(account)
    }

    // Method to select to account
    selectToAccount(account) {
        cy.get(this.toAccountLocator).select(account)
    }

    // Method to click Transfer Button
    clickTransferButton(){
        cy.get(this.transferButton).click();
    }

    // Method to assert the transfer was successful
    assertTransferIsSuccessful(){
        cy.get(this.successMessage).should('have.text', 'Transfer Complete!')
    }


}

export default TransferFundsPage;