import { IOneJoke } from "../../src/services/httpService";

interface IResponseJokeFromCategory {
  status: number;
  body: IOneJoke;
}

interface IResponseCategories {
  status: number;
  body: string[];
}

describe("Testing the HomePage", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should render the homePage correctly", () => {
    const urlRequest = "https://api.chucknorris.io/jokes/categories";
    const lengthQuantityResponse = 16;
    cy.contains("Gere uma piada aleatória ou a partir de uma categoria!");
    cy.get("button").should("contain", "Gerar piada aleatória");
    cy.get("select").select("Selecione uma opção.");
    cy.get("#box-joke").should("not.exist");

    cy.request({
      url: urlRequest,
      method: "get",
    }).then(({ status, body }: IResponseCategories) => {
      expect(status).to.eq(200);
      expect(body).to.have.lengthOf(lengthQuantityResponse);
    });
  });
  it("should be able to generate a random joke", () => {
    cy.get("button").click();
    cy.get("#box-joke").should("exist").should("have.length", 1);
    cy.get("#text-joke").should("exist").should("have.length", 1);
  });
  it("should be able to gerenate a random joke from one selected category", () => {
    const validCategory = "animal";
    const urlRequest = `https://api.chucknorris.io/jokes/random?category=${validCategory}`;
    cy.get("select").select("animal");
    cy.get("button").click();
    cy.request({
      method: "get",
      url: urlRequest,
    }).then(({ status, body }: IResponseJokeFromCategory) => {
      expect(status).to.eq(200);
      expect(body.categories).to.eql([validCategory]);
    });
  });
  it("should be able to generate two random and distinct jokes", () => {
    cy.get("button").click();
    cy.get("#text-joke").then((firstJoke) => {
      const firstText = firstJoke.text();
      cy.get("button").click();

      cy.get("#text-joke").should((secondJoke) => {
        const secondText = secondJoke.text();
        expect(firstText).not.to.eq(secondText);
      });
    });
  });
});
