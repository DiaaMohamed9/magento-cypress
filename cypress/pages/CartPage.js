class CartPage {
  elements = {
    cartIcon: () => cy.get(".showcart"),
    viewCartLink: () => cy.get("a.viewcart"),
    subtotal: () => cy.get(".totals.sub .price", { timeout: 10000 }),
    discount: () => cy.get("[data-th='Discount']"),
    orderTotal: () => cy.get(".grand.totals .price").first(),
  };

  openCart() {
    this.elements.cartIcon().click({ force: true });
    this.elements.viewCartLink().click({ force: true });
  }

  verifyTotal(prices) {
    const expectedSubtotal = prices.reduce((a, b) => a + b, 0);

    // Validate subtotal matches expected
    this.elements
      .subtotal()
      .invoke("text")
      .then((subText) => {
        const displayedSubtotal = parseFloat(subText.replace(/[^0-9.-]+/g, ""));
        cy.log("Expected Subtotal from Products: " + expectedSubtotal);
        cy.log("Displayed Subtotal in Cart: " + displayedSubtotal);
        expect(displayedSubtotal).to.be.closeTo(expectedSubtotal, 0.05);

        cy.get("body").then(($body) => {
          let discount = 0;

          if ($body.find("[data-th='Discount']").length > 0) {
            discount = parseFloat(
              $body
                .find("[data-th='Discount']")
                .text()
                .replace(/[^0-9.-]+/g, "")
            );
          }
          const expectedOrderTotal = expectedSubtotal + discount;

          this.elements
            .orderTotal()
            .invoke("text")
            .then((orderText) => {
              const orderTotal = parseFloat(orderText.replace(/[^0-9.]+/g, ""));

              cy.log("Discount: " + discount);
              cy.log("Expected Order Total: " + expectedOrderTotal);
              cy.log("Displayed Order Total: " + orderTotal);

              expect(orderTotal).to.be.closeTo(expectedOrderTotal, 0.05);
            });
        });
      });
  }
}

export default CartPage;
