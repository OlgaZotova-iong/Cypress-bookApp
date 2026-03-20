Cypress.Commands.add("login", (email, password) => {
  cy.contains("Log in").click();
  if (email) cy.get("#mail").type(email);
  if (password) cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addNewBook", (title, description, author) => {
  cy.get('button.btn-warning').contains('Add new').click();
  cy.get('#title').type(title);
  cy.get('input[name="description"]').type(description);
  cy.get('#authors').type(author);

  cy.get('button[type="submit"]').click();
});







