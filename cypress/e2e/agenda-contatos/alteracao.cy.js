/// <reference types="cypress" />

describe("Teste para a remoção de contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve remover o primeiro contato", () => {
    cy.get(".edit").first().click();
    cy.get('input[value="gian Souza"]').clear().type("Gian Sousa");
    cy.get('input[value="gian@ebac.com.br"]')
      .clear()
      .type("giansousa@ebac.com.br");
    cy.get('input[value="11912345678"]').clear().type("(11) 91234-5678");
    cy.get(".alterar").click();
  });
});
