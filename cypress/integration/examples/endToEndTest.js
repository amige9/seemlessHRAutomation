/// <reference types="cypress" />
import RegisterPage from "./pageObject/RegisterPage";
import LoginPage from "./pageObject/LoginPage";
import NewAccountPage from "./pageObject/newAccountPage";
import TransferFundsPage from "./pageObject/TransferFundsPage";
import RequestLoanPage from "./pageObject/RequestLoanPage";
import LogoutPage from "./pageObject/LogoutPage";
import { faker } from '@faker-js/faker';



describe('Parabank End to End Test', function () {

    let regData;
    let fundData
    let loanData

    // Load the fixture data before tests
    before(function () {
        cy.fixture('registrationTestData').then(function (data) {
            regData = data;
        })

        cy.fixture('transferTestData').then(function (data) {
            fundData = data;
        });

        cy.fixture('requestLoanTestData').then(function (data) {
            loanData = data;
        });

    })

    // Create a new instance for Registration Page
    const registerPage = new RegisterPage();

    // Create a random faker username
    const username = faker.internet.userName();

    // Create a random first Name
    const firstName = faker.person.firstName();

    // Create a random last Name
    const lastName = faker.person.firstName();


    it('End to End Test', function () {
        // Visit the URL
        registerPage.goToURL();

        // Click on the Register Button
        registerPage.clickRegisterButton();

        // Fill Registration Form
        registerPage.fillRegistrationForm(firstName, lastName, regData.address, regData.city,
            regData.state, regData.Zipcode, regData.phone, regData.SSN, username,
            regData.password, regData.confirm);

        // Assert if the Registration was successful
        registerPage.assertRegistrationIsSuccessful();

        //Log out
        registerPage.clickLogoutLink();

        // Create a new instance for Login Page
        const loginPage = new LoginPage();

        loginPage.goToURL();

        // Enter Login Details
        loginPage.login(username, regData.password)

        // Click Login Button
        loginPage.clickLoginButton();

        // Assert Login is Successful
        loginPage.assertLoginIsSuccessful();

        // Create an instance of NewAccountPage
        const accountPage = new NewAccountPage();

        // Click on "Open New Account"
        accountPage.clickNewAccount();

        // After clicking "Open New Account", select account type
        accountPage.selectAccountType();

        // Then click on "Open New Account" to open a new account
        accountPage.clickOpenNewAccountButton();

        // Then Assert the Account was opened successfully
        accountPage.assertAccountIsOpenedSuccessful();

        // Create an instance of TransferFundsPage
        const transferPage = new TransferFundsPage();

        // Click on "Transfer Funds"
        transferPage.clickTransferFundsLink();

        // After clicking "Transfer Funds", Enter Amount
        transferPage.enterAmount(fundData.amount)

        // Then click on the transfer button to transfer the amount
        transferPage.clickTransferButton();

        // Then Assert the transfer was successful
        transferPage.assertTransferIsSuccessful();

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

        // Create an instance of LogoutPage
        const logoutPage = new LogoutPage();

        // Click on "Log out Link"
        logoutPage.clickLogoutLink();

        // Then Assert log out was successful
        logoutPage.assertLogoutIsSuccessful();


    })
})