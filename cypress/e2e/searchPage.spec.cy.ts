import { IMultipleJokes } from "../../src/services/httpService";

interface IResponseJokeFromSearch {
  status: number;
  body: IMultipleJokes;
}

describe("Testing the search page", () => {
  beforeEach(() => {
    cy.visit("/search");
  });
  it("should render the search page correctly", () => {
    cy.contains("Pesquise por uma palavra!");
    cy.get("button").should("contain", "Pesquisar");
    cy.get("#box-joke").should("not.exist");
    cy.get("input").should("exist").should("have.text", "");
  });
  it("should generate a joke with a valid input", () => {
    const textInput = "valdez";
    const urlRequest = `https://api.chucknorris.io/jokes/search?query=${textInput}`;
    const quantityResponse = 1;
    cy.get("input").clear().type(textInput);
    cy.get("button").click();
    cy.request({
      url: urlRequest,
      method: "get",
    }).then(({ status, body }: IResponseJokeFromSearch) => {
      expect(status).to.eq(200);
      expect(body.total).to.eq(quantityResponse);
      const valueUpperCased = body.result[0].value.toUpperCase();
      expect(valueUpperCased).to.include(textInput.toUpperCase());
    });
    cy.contains(
      "Infelizmente não encontramos nenhuma piada com este nome."
    ).should("not.exist");
  });
  it("should not gerenate a joke with an invalid input", () => {
    const textInput = "valdery";
    const urlRequest = `https://api.chucknorris.io/jokes/search?query=${textInput}`;
    const quantityResponse = 0;
    cy.get("input").clear().type(textInput);
    cy.get("button").click();
    cy.request({
      url: urlRequest,
      method: "get",
    }).then(({ status, body }: IResponseJokeFromSearch) => {
      expect(status).to.eq(200); // Infelizmente retorna 200.
      expect(body.total).to.eq(quantityResponse);
      expect(body.result).to.deep.equal([]);
    });
    cy.contains(
      "Infelizmente não encontramos nenhuma piada com este nome."
    ).should("exist");
  });
});
