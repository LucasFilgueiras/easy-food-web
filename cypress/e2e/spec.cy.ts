describe('Validate index page features', () => {
  it("should bring the header menu information", () => {
    cy.visit('/')

    cy.get("#nameMenu").should("have.text", "");
    cy.get("#validityMenu").should("have.text", "");

    cy.window().then((window) => {
      window.alert("Não foi possível carregar as informações do cardápio");
    })
  });

  it("should bring the products menu information", () => {
    cy.visit('/')

    cy.get("#productsMenu").should("have.text", "");

    cy.window().then((window) => {
      window.alert("Não foi possível carregar as informações dos produtos do cardápio");
    })
  });
})