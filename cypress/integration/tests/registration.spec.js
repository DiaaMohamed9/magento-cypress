import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
const testData = require("../../fixtures/testData.json");

describe("User Registration and Login Validation", () => {
  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();

  it("should register a new user and login successfully", () => {
    cy.visit("/customer/account/create/");
    registerPage.register(testData.newUser);

    cy.get("[data-action='customer-menu-toggle']").eq(0).click({ force: true });
    // Wait until the dropdown is visible (aria-hidden="false")
    cy.get(".customer-menu")
      .should("exist")
      .should("have.attr", "aria-hidden", "false");

    // Then click the logout link
    cy.get(".customer-menu").find("a").contains("Sign Out").click();
    cy.visit("/customer/account/login/");
    loginPage.login(testData.newUser.email, testData.newUser.password);

    cy.contains("Welcome,").should("exist");
  });
});
