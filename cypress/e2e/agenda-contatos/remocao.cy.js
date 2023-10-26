/// <reference types="cypress" />

describe("Teste para a remoção de contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve remover o ultimo contato", () => {
    cy.get(".delete").last().click();
  });
});
