import ProductPage from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";
import RegisterPage from "../../pages/RegisterPage";
const testData = require("../../fixtures/testData.json");

describe("Place Order with Multiple Products and Price Validation", () => {
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const registerPage = new RegisterPage();

  const productPaths = ["/breathe-easy-tank.html", "/breathe-easy-tank.html"];

  before(() => {
    Cypress.on("uncaught:exception", () => false);

    cy.visit("/customer/account/create/");
    registerPage.register(testData.newUser);

    // const email = Cypress.env("TEST_EMAIL");
    // const password = Cypress.env("TEST_PASSWORD");
    // loginPage.login(email, password);
  });

  it("should add multiple products to cart and validate prices", () => {
    const collectedPrices = [];

    productPaths.forEach((path) => {
      cy.visit(path);
      productPage.selectOptionsIfAvailable();

      productPage.addToCartAndCapturePrice().then((price) => {
        collectedPrices.push(price);
      });
    });

    cy.then(() => {
      cartPage.openCart();
      cartPage.verifyTotal(collectedPrices);
    });
  });
});
