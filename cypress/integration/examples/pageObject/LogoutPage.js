class LogoutPage{

    constructor(){
        this.logoutLink = "a[href='logout.htm']";
        this.loginTextLocator = "div[id='leftPanel'] h2"
    }

    // Method to log out
    clickLogoutLink(){
        cy.get(this.logoutLink).click();
    }

    // Method to assert Logout was successful
    assertLogoutIsSuccessful(){
        cy.get(this.loginTextLocator).should('have.text', 'Customer Login');
        cy.title().should('eq', 'ParaBank | Welcome | Online Banking')
    }
}

export default LogoutPage;