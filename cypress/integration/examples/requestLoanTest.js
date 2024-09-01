import LoginPage from "./pageObject/LoginPage";
import RequestLoanPage from "./pageObject/RequestLoanPage";

describe('Transfer Funds Test', function () {
    let testData;
    let loanData;

    // Load the fixture data before tests
    before(function () {
        cy.fixture('loginTestData').then(function (data) {
            testData = data;
        });

        cy.fixture('requestLoanTestData').then(function (data) {
            loanData = data;
        });


    });

     // Create an instance of LoginPage
    const loginPage = new LoginPage();

    it('valid Apply For a Loan Test', function () {
        // Visit the login URL
        loginPage.goToURL();

        // Enter login details
        loginPage.login(testData.username, testData.password);

        // Click Login button and assert login is successful
        loginPage.clickLoginButton();
        loginPage.assertLoginIsSuccessful();

        // Create an instance of RequestLoanPage
        const loanPage = new RequestLoanPage();

        // Click on "Request Loan Link"
        loanPage.clickRequestLoanLink();

        // After clicking "Request", Enter Amount
        loanPage.enterLoanAmount(loanData.loanAmount);

        // Then enter Down Payment
        loanPage.enterDownPayment(loanData.downPayment);

        // Then click on Apply Now Button
        loanPage.clickApplyNow();

        // Then Assert the loan Request was successful
        loanPage.assertRequestLoanIsSuccessful();
    });
});