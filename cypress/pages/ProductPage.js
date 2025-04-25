class ProductPage {
  elements = {
    colorSwatch: () => cy.get(".swatch-attribute.color .swatch-option"),
    sizeSwatch: () => cy.get(".swatch-attribute.size .swatch-option"),
    price: () => cy.get(".product-info-main .price").first(),
    addToCartButton: () => cy.get("#product-addtocart-button"),
    successMessage: () => cy.get(".message-success"),
  };

  selectOptionsIfAvailable() {
    cy.get(".product-options-wrapper", { timeout: 10000 }).should("be.visible");

    cy.get("body").then(($body) => {
      if ($body.find(".swatch-attribute.color").length > 0) {
        this.elements.colorSwatch().first().click({ force: true });
      }
      if ($body.find(".swatch-attribute.size").length > 0) {
        this.elements.sizeSwatch().first().click({ force: true });
      }
    });
  }

  addToCartAndCapturePrice() {
    let price = 0;

    return this.elements
      .price()
      .invoke("text")
      .then((text) => {
        price = parseFloat(text.replace(/[^0-9.]/g, ""));
      })
      .then(() => {
        this.elements.addToCartButton().click();
        this.elements.successMessage().should("exist");
      })
      .then(() => {
        return cy.wrap(price);
      });
  }
}

export default ProductPage;
