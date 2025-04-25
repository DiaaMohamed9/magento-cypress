class LoginPage {
  elements = {
    emailInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#pass"),
    loginButton: () => cy.get("#send2"),
  };

  login(email, password) {
    cy.visit("/customer/account/login/");
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.loginButton().click();
  }
}

export default LoginPage;
