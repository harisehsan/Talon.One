import {LoginPage} from "../pages/LoginPage";
import {BasePage} from "../pages/BasePage";
import {ProductPage} from "../pages/ProductPage";
import {CartPage} from "../pages/CartPage";
import {PurchasePage} from "../pages/PurchasePage";
import {PRODUCT_NAME, USER_DETAILS} from "../constants/purchaseConstants";

describe('Login & Purchase Functionality', () => {
    const loginPage = new LoginPage();
    const basePage = new BasePage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const purchasePage = new PurchasePage();

    before(() => {
        basePage.visitBasePage();
    });

    it('Verify the login functionality', () => {
      loginPage.fillLogin(Cypress.env('username'), Cypress.env('password'));
      loginPage.clickOnSubmitButton();
      loginPage.getNameOfUser()
          .should('be.visible')
          .and('have.text', `Welcome ${Cypress.env('username')}`);
    });

    it('Verify product add to cart', () => {
      productPage.selectProduct(PRODUCT_NAME);
      productPage.addProductToCart();
      cartPage.navigateToCart();
      cartPage.getProductInCart(PRODUCT_NAME).should('be.visible');
    });

    it('Verify product purchase process', () => {
        cartPage.selectPlaceOrder();
        purchasePage.performProductPurchase(USER_DETAILS.NAME,USER_DETAILS.COUNTRY,USER_DETAILS.CITY,USER_DETAILS.CREDIT_CARD,USER_DETAILS.MONTH,USER_DETAILS.YEAR);
        purchasePage.getPurchaseConfirmationMessage().should('be.visible');
    });

 });