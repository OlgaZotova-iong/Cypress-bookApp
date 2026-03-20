describe("BookApp Tests", () => { 
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should open the main page", () => {
    cy.contains("Books list").should("be.visible");
  });

  describe("Login Tests", () => {
    it("Should successfully login", () => {
      cy.login("test@test.com", "test");
      cy.contains("Добро пожаловать test@test.com").should("be.visible");
    });

    it("Should not login with empty password", () => {
      cy.contains("Log in").click();
      cy.get("#mail").type("test@test.com");
      cy.contains("Submit").click();
      cy.get("#pass").then(($el) => {
        expect($el[0].checkValidity()).to.be.false;
      });
    });
  });

  describe("Book Management Tests", () => {
    beforeEach(() => {
      cy.login("test@test.com", "test");
    });

    it("Should add book Ночной Дозор", () => {
      cy.addNewBook("Ночной Дозор", "фэнтази", "Лукьяненко");
      cy.contains("Ночной Дозор").should("be.visible");
    });

    it("Should add book to favorites via checkbox", () => {
      cy.get('button.btn-warning').contains('Add new').click();
      cy.get('#title').type("The Witcher");
      cy.get('input[name="description"]').type("Fantasy");
      cy.get('#authors').type("Sapkowski");
      cy.get('#favorite').click(); 
      cy.get('button[type="submit"]').click();

      cy.contains("Favorites").click();
      cy.contains("The Witcher").should("be.visible");
    });

    it("Should delete book from favorites", () => {
      cy.get('button.btn-warning').contains('Add new').click();
      cy.get('#title').type("To Delete");
      cy.get('input[name="description"]').type("temp");
      cy.get('#authors').type("author");
      cy.get('#favorite').click(); 
      cy.get('button[type="submit"]').click();

      cy.contains("Favorites").click();

      cy.contains("To Delete").should("be.visible");

      cy.contains("Delete from favorite").click();

      cy.contains("To Delete").should("not.exist");
    });


  });
});








