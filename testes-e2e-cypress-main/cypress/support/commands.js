Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-test=${selector}]`);
});

Cypress.Commands.add('dataContainsText', (selector, text) => {
  return cy.get(`[data-test=${selector}]`).contains(text);
});
