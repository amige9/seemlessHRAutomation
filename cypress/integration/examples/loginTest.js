import LoginPage from "./pageObject/LoginPage";


describe('Login Test', function () {

    let testData;
    let loginData
    
    // Load the fixture data before tests
    before(function () {
        cy.fixture('loginTestData').then(function (data) {
            testData = data;
        })

        cy.fixture('invalidLoginTestData').then(function (data) {
            loginData = data;
        })
    })

    const loginPage = new LoginPage();

    it('invalid Login Test', function () {
        // Visit the URL
        loginPage.goToURL();

        loginData.forEach((data) => {

            // Enter Login Details
            loginPage.login(data.username, data.password)
            // Click Login Button
            loginPage.clickLoginButton();
            // Assert Login is not Successful
            loginPage.assertLoginIsNotSuccessful();
            cy.reload();

        })


    })


    it('valid Login Test', function () {
        // Visit the URL
        loginPage.goToURL();

        // Enter Login Details
        loginPage.login(testData.username, testData.password)

        // Click Login Button
        loginPage.clickLoginButton();

        // Assert Login is Successful
        loginPage.assertLoginIsSuccessful();
    })

})