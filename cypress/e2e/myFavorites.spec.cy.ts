describe("Testing the myFavorites page", () => {
  it("should render with a message when does not have any favorited joke", () => {
    const messageTitle = "Infelizmente você ainda não escolheu nenhuma piada.";
    const messageJoke = "Chuck Norris disapproved!";
    cy.visit("me");
    cy.get("h1").should("have.text", "Estas são suas piadas favoritas");
    cy.contains(messageTitle);
    cy.contains(messageJoke);
  });
  it("should render the jokes when does have favorited jokes", () => {
    let textFavorited = "";
    cy.visit("/");
    cy.get("button").click();
    cy.get("#text-joke")
      .should("exist")
      .then((text) => {
        textFavorited = text.text();
      });
    cy.get("#icon-not-liked").should("exist").click();
    cy.get("#icon-liked").should("exist");
    cy.get("#icon-not-liked").should("not.exist");
    cy.visit("/me");
    cy.get("#text-joke")
      .should("exist")
      .then((textJoke) => {
        expect(textJoke.text()).equal(textFavorited);
      });
  });
});
