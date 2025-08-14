import 'cypress-xpath';

export class CartPage {

    getCartLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#cartur')
    }

    getProductInCart(productName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath(`//td[text()='${productName}']`);
    }

    getPlaceOrderButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`.btn.btn-success`);
    }

    navigateToCart()
    {
        this.getCartLink().click();
    }

    selectPlaceOrder()
    {
        this.getPlaceOrderButton().click();
    }
}
