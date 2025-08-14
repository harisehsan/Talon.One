import 'cypress-xpath';

export class PurchasePage {


    getNameTextBox(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#name');
    }

    getCountryTextBox(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#country');
    }

    getCityTextBox(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#city');
    }

    getCardTextBox(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#card');
    }

    getMonthTextBox(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#month');
    }

    getYearTextBox(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#year');
    }

    getPurchaseButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`button[onclick='purchaseOrder()']`);
    }

    getPurchaseConfirmationMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath(`//h2[text()='Thank you for your purchase!']`)
    }

    performProductPurchase(name: string, country: string, city: string, credit: string, month : string, year: string) {
        this.getNameTextBox().clear().type(name);
        this.getCountryTextBox().clear().type(country);
        this.getCityTextBox().clear().type(city);
        this.getCardTextBox().clear().type(credit);
        this.getMonthTextBox().clear().type(month);
        this.getYearTextBox().clear().type(year);
        this.getPurchaseButton().click();
    }
}