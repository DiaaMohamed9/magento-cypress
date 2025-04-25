class WishlistPage {
  elements = {
    wishlistIcon: () => cy.get(".action.towishlist").eq(1),
    wishlistPageLink: () => cy.visit("/wishlist/"),
    addToCartButtons: () =>
      cy
        .get("#wishlist-sidebar")
        .get("button.action.tocart span")
        .contains("Add to Cart"),
  };

  addToWishlist() {
    this.elements.wishlistIcon().click({ force: true });
  }

  moveToCartFromWishlist() {
    this.elements.wishlistPageLink();
    this.elements.addToCartButtons().click({ force: true, multiple: true });
  }
}

export default WishlistPage;
