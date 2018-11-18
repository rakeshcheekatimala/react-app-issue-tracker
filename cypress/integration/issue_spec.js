describe("Vist App", function() {
  it("Visits the Issue Tracker app", function() {
    cy.visit("/");
  });
});

// I had to write sameTest Case as Cypress clear the localStorage
describe("Create Post and Edit Post", function() {
  it("should create a new post", function() {
    cy.get("#title").type("first");
    cy.get("select").select("open");
    cy.get("#description").type("my first post automation test");
    cy.get(".submit-btn").click();
    cy.get(".card .header").then($myElement => {
      cy.get(".edit-btn").click();
      cy.get("#title")
        .clear()
        .type("edit my first post");
      cy.get(".submit-btn").click();
    });
  });
});
