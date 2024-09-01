
class LoginPage{

    constructor(){
        this.usernameLocator = "input[name='username']";
        this.passwordLocator = "input[name='password']";
        this.loginButtonLocator = "input[value='Log In']"
        this.errorMessage = ".error"

    }

    goToURL() {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.title().should('eq', 'ParaBank | Welcome | Online Banking')
    }

    login(username, password){
        cy.get(this.usernameLocator).type(username);
        cy.get(this.passwordLocator).type(password);
    }

    enterUsername(name){
        cy.get(this.usernameLocator).type(name);
    }

    enterPassword(password){
        cy.get(this.passwordLocator).type(password);
    }

    clickLoginButton(){
        cy.get(this.loginButtonLocator).click();
    }

    assertLoginIsSuccessful(){
        cy.title().should('eq', 'ParaBank | Accounts Overview')
    }

    assertLoginIsNotSuccessful(){
        cy.get(this.errorMessage).should('have.text', 'The username and password could not be verified.')
    }


}

export default LoginPage;