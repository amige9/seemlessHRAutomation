import LoginPage from './pageObject/LoginPage';
import NewAccountPage from './pageObject/newAccountPage';

describe('New Account Test', function () {
    let testData;

    // Load the fixture data before tests
    before(function () {
        cy.fixture('loginTestData').then(function (data) {
            testData = data;
        });
    });

    const loginPage = new LoginPage();

    it('valid Open New Account Test', function () {
        // Visit the login URL
        loginPage.goToURL();

        // Enter login details
        loginPage.login(testData.username, testData.password);

        // Click Login button and assert login is successful
        loginPage.clickLoginButton();
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
    });
});

