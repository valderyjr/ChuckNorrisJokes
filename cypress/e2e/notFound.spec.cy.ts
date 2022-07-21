describe("Testing the not found page", () => {
  it("should render correctly", () => {
    cy.visit("/any_page");
    cy.get("h1").should("have.text", "Esta página não existe.");
  });
});
