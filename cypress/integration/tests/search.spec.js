
import HomePage from '../../pages/HomePage'
const testData = require('../../fixtures/testData.json')

describe('Search and Validate Results', () => {
  const homePage = new HomePage()

  it('should search for product and validate result', () => {
    cy.visit('/')
    homePage.searchForItem(testData.searchQuery)
    cy.get('.product-item').should('exist')
    cy.contains(testData.searchQuery, { matchCase: false })
  })
})
