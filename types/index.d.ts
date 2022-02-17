// in cypress/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
      dataCy(value: string): Chainable<any>;
  };
}