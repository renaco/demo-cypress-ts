// declare namespace Cypress {
//   interface Chainable {
//     generateToken({secret}: {secret: string}): void
//   }
// }

declare namespace Cypress {
  interface Chainable<Subject> {
    login(username: String, password: String): Chainable<Subject>
    addSales(username: String, password: String): Chainable<Subject>
    closeModal(): Chainable<Subject>
  }
}