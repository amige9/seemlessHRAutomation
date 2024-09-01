import LoginPage from "./pageObject/LoginPage";
import TransferFundsPage from "./pageObject/TransferFundsPage";

describe('Transfer Funds Test', function () {
    let testData;
    let fundData

    // Load the fixture data before tests
    before(function () {
        cy.fixture('loginTestData').then(function (data) {
            testData = data;
        });

        cy.fixture('transferTestData').then(function (data) {
            fundData = data;
        });

    });

    const loginPage = new LoginPage();

    it('valid Transfer Funds Test', function () {
        // Visit the login URL
        loginPage.goToURL();

        // Enter login details
        loginPage.login(testData.username, testData.password);

        // Click Login button and assert login is successful
        loginPage.clickLoginButton();
        loginPage.assertLoginIsSuccessful();

        // Create an instance of TransferFundsPage
        const transferPage = new TransferFundsPage();

        // Click on "Transfer Funds"
        transferPage.clickTransferFundsLink();

        // After clicking "Transfer Funds", Enter Amount
        transferPage.enterAmount(fundData.amount)

        // Then select the from account
        transferPage.selectFromAccount(fundData.fromAccount)

        // Then select the to account
        transferPage.selectToAccount(fundData.toAccount)

        // Then click on the transfer button to transfer the amount
        transferPage.clickTransferButton();

        // Then Assert the transfer was successful
        transferPage.assertTransferIsSuccessful();
    });
});