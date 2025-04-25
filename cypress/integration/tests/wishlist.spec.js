import WishlistPage from "../../pages/WishlistPage";
import CartPage from "../../pages/CartPage";
import ProductPage from "../../pages/ProductPage";
import RegisterPage from "../../pages/RegisterPage";
const testData = require("../../fixtures/testData.json");

describe("Wishlist and Checkout", () => {
  const wishlistPage = new WishlistPage();
  const cartPage = new CartPage();
  const productPage = new ProductPage();
  const registerPage = new RegisterPage();

  before(() => {
    Cypress.on("uncaught:exception", () => false);

    cy.visit("/customer/account/create/");
    registerPage.register(testData.newUser);
  });

  it("should add item to wishlist and move to cart", () => {
    const collectedPrices = [];

    cy.visit("/");
    wishlistPage.addToWishlist();

    wishlistPage.moveToCartFromWishlist();
    productPage.selectOptionsIfAvailable();

    productPage.addToCartAndCapturePrice().then((price) => {
      collectedPrices.push(price);
    });
    cy.wait(2000);
    cartPage.openCart();
    // cartPage.verifyTotalVisible();
  });
});
