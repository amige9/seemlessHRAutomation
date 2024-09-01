class RequestLoanPage {

    constructor(){
        this.requestLoanLink = "a[href='requestloan.htm']";
        this.loanAmountLoactor = "#amount"
        this.downPaymentLocator = "#downPayment"
        this.applyNowButton = "input[value='Apply Now']"
        this.successMessage = "div[id='loanRequestApproved'] p:nth-child(1)"

    }

    // Method to click on Request Loan Link
    clickRequestLoanLink(){
        cy.get(this.requestLoanLink).click();
    }

    // Method to enter loan Amount
    enterLoanAmount(amount){
        cy.get(this.loanAmountLoactor).type(amount)
    }

    // Method to enter Down Payment
    enterDownPayment(amount){
        cy.get(this.downPaymentLocator).type(amount)
    }

    // Method to click on Apply Now
    clickApplyNow(){
        cy.get(this.applyNowButton).click()
    }

    // Method to assert that request Loan was Successful
    assertRequestLoanIsSuccessful(){
        cy.get(this.successMessage).should('have.text', 'Congratulations, your loan has been approved.')
    }


}

export default RequestLoanPage;