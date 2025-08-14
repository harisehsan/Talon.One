export class BasePage {
    visitBasePage(): void {
        cy.visit('/');
    }
}