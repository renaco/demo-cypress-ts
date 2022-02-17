// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

function login(user: string, password: string) {
  // ...
  // cy.reload();

  cy.get('[data-test=document-number]')
    .click()
    .type(user)

  cy.get('[data-test="password"]')
    .click()
    .type(password)

  cy.get('[data-test="login"]')
    .click()
}

function randomNumber(digits: number) {
  return Math.floor(Math.random() * Math.pow(digits, 10))
}

function closeModal() {
  cy.get('.tiny__modal-overlay')
    .then(($overlay) => {
      if ($overlay) {
        cy.get('[data-test=close-modal]')
          .click()
      }
    })
}

function addSales(
  product: string,
  amount?: string,
  quantity?: string,
) {
  cy.get('[data-test="product"]')
    .click()
    .type(product)

  cy.get('[data-test="amount-unit"]')
    .click()
    .type(amount)

  cy.get('[data-test="quantity"]')
    .clear()
    .type(quantity)

  cy.get('[data-test="save-movement"]')
    .click()
}

Cypress.Commands.add('login', login);
Cypress.Commands.add('addSales', addSales);
Cypress.Commands.add('closeModal', closeModal);
// Cypress.Commands.add('number', randomNumber);
