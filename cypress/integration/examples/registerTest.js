/// <reference types="cypress" />
import RegisterPage from "./pageObject/RegisterPage";

describe('Registration Test', function () {

    let testData;
    before(function () {
        cy.fixture('registrationTestData').then(function (data) {
            testData = data;
        })
    })

    const registerPage = new RegisterPage();


    it('valid Registration Test', function () {
        // Visit the URL
        registerPage.goToURL();

        // Click on the Register Button
        registerPage.clickRegisterButton();

        // Fill Registration Form
        registerPage.fillRegistrationForm(testData.firstName, testData.lastName, testData.address, testData.city,
            testData.state, testData.Zipcode, testData.phone, testData.SSN, testData.username,
            testData.password, testData.confirm);

        // Assery if the Registration was successful
        registerPage.assertRegistrationIsSuccessful();
    })
})