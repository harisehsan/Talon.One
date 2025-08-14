
export class LoginPage {

    getLoginBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#login2');
    }

    getLoginUsername(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#loginusername');
    }

    getLoginPassword(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#loginpassword');
    }

    getSignInButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`button[onclick='logIn()']`);
    }

    getNameOfUser(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`#nameofuser`);
    }

    fillLogin(username: string, password: string) {
        this.getLoginBtn().click();
        this.getLoginUsername().should('be.visible', { timeout: 10000 }).clear().type(username);
        this.getLoginPassword().click().type(password);
    }

    clickOnSubmitButton() {
       this.getSignInButton().click();
       this.getSignInButton().should('not.be.visible',{ timeout: 6000 });
    }
}