class RegisterPage {
  elements = {
    firstName: () => cy.get("#firstname"),
    lastName: () => cy.get("#lastname"),
    email: () => cy.get("#email_address"),
    password: () => cy.get("#password"),
    confirmPassword: () => cy.get("#password-confirmation"),
    registerButton: () => cy.get('button[title="Create an Account"]'),
  };

  register(user) {
    this.elements.firstName().type(user.firstName);
    this.elements.lastName().type(user.lastName);
    const randomEmail = this.generateRandomEmail();
    user.email = randomEmail;
    this.elements.email().type(randomEmail);
    this.elements.password().type(user.password);
    this.elements.confirmPassword().type(user.password);
    this.elements.registerButton().click();
    Cypress.env("generated_email", randomEmail);
  }

  generateRandomEmail() {
    const timestamp = Date.now();
    return `testuser_${timestamp}@example.com`;
  }
}

export default RegisterPage;
