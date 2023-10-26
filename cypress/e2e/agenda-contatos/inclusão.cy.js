/// <reference types="cypress" />

describe("Teste para a inclusão de contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve veririficar a inclusão dos contatos", () => {
    cy.get("input[type='text']").type("Adriano");
    cy.get("input[type='email']").type("adriano@gmail.com");
    cy.get("input[type='tel']").type("0123456789");
    cy.get(".adicionar").click();
  });
});
