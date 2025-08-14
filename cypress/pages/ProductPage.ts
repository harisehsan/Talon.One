import 'cypress-xpath';

export class ProductPage {

    getLaptopsLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[onclick="byCat('notebook')"]`)
    }

    getProductByName(productName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath(`//a[text()='${productName}']`);
    }

    getProductTitle(productName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath(`//h2[text()='${productName}']`);
    }

    getaddToCartButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath(`//a[text()='Add to cart']`);
    }

    selectProduct(product: string) {
        this.getLaptopsLink().click();
        this.getProductByName(product).click();
        this.getProductTitle(product).should('be.visible', {timeout: 10000});
    }

    addProductToCart() {
        this.getaddToCartButton().click();
    }
}
