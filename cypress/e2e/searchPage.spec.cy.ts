import { IMultipleJokes, IOneJoke } from "../../src/services/httpService";

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
  it("should not generate a joke with an invalid input", () => {
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
  it("should be able to get next joke when possible", () => {
    const textInput = "vald";
    const urlRequest = `https://api.chucknorris.io/jokes/search?query=${textInput}`;
    const quantityResponse = 2;

    let responseCopy: IOneJoke[] = [];

    cy.get("input").clear().type(textInput);
    cy.get("button").click();
    cy.request({
      url: urlRequest,
      method: "get",
    }).then(({ status, body }: IResponseJokeFromSearch) => {
      expect(status).to.eq(200);
      responseCopy = [...body.result];
      expect(body.total).to.eq(quantityResponse);
      const valueUpperCased = body.result[0].value.toUpperCase();
      expect(valueUpperCased).to.include(textInput.toUpperCase());
      console.log(responseCopy);
    });
    cy.get("#text-joke").then((text) => {
      expect(text.text()).equal(responseCopy[0].value);
    });
    cy.get("#icon-next").should("exist").click();
    cy.get("#text-joke").then((text) => {
      expect(text.text()).equal(responseCopy[1].value);
    });
    cy.get("#icon-next").should("not.exist");
  });
  it("should be able to get previous joke when possible", () => {
    const textInput = "vald";
    const urlRequest = `https://api.chucknorris.io/jokes/search?query=${textInput}`;
    const quantityResponse = 2;

    let responseCopy: IOneJoke[] = [];

    cy.get("input").clear().type(textInput);
    cy.get("button").click();
    cy.request({
      url: urlRequest,
      method: "get",
    }).then(({ status, body }: IResponseJokeFromSearch) => {
      expect(status).to.eq(200);
      responseCopy = [...body.result];
      expect(body.total).to.eq(quantityResponse);
      const valueUpperCased = body.result[0].value.toUpperCase();
      expect(valueUpperCased).to.include(textInput.toUpperCase());
      console.log(responseCopy);
    });
    cy.get("#icon-previous").should("not.exist");
    cy.get("#text-joke").then((text) => {
      expect(text.text()).equal(responseCopy[0].value);
    });
    cy.get("#icon-next").click();
    cy.get("#text-joke")
      .should("be.visible")
      .then((text) => {
        expect(text.text()).equal(responseCopy[1].value);
      });
    cy.get("#icon-previous").should("exist").click();
    cy.get("#text-joke").then((text) => {
      expect(text.text()).equal(responseCopy[0].value);
    });
    cy.get("#icon-previous").should("not.exist");
  });
});
