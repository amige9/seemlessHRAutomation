import LoginPage from "./pageObject/LoginPage";
import LogoutPage from "./pageObject/LogoutPage";

describe('Transfer Funds Test', function () {
    let testData;

    // Load the fixture data before tests
    before(function () {
        cy.fixture('loginTestData').then(function (data) {
            testData = data;
        });


    });

     // Create an instance of LoginPage
    const loginPage = new LoginPage();

    it('valid Logout Test', function () {
        // Visit the login URL
        loginPage.goToURL();

        // Enter login details
        loginPage.login(testData.username, testData.password);

        // Click Login button and assert login is successful
        loginPage.clickLoginButton();
        loginPage.assertLoginIsSuccessful();

        // Create an instance of LogoutPage
        const logoutPage = new LogoutPage();

        // Click on "Log out Link"
        logoutPage.clickLogoutLink();

        // Then Assert log out was successful
        logoutPage.assertLogoutIsSuccessful();
    });
});