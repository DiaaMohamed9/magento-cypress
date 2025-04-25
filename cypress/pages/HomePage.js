
class HomePage {
  elements = {
    searchInput: () => cy.get('#search'),
    productItems: () => cy.get('.product-item')
  }

  searchForItem(term) {
    this.elements.searchInput().type(term + '{enter}')
  }
}

export default HomePage;
