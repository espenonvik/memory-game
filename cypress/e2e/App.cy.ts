describe("Memento - Memory Game", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the header", () => {
    cy.get("h4").should("have.text", "Wins: 0");
    cy.get("h3").should("have.text", "Memento 🔥");
    cy.get("button").should("have.text", "Start over");
  });

  it("displays a grid of cards", () => {
    cy.get(".grid").should("exist");
    cy.get(".card").should("have.length", 16);
    cy.get("div > .card-back").should("have.length", 16).and("be.visible");
  });

  it("allows the player to view the face of a card", () => {
    cy.get(".card").first().click();
    cy.get(".selected > .card-face").should("be.visible");
  });

  it("allows the player to match two cards", () => {
    cy.get(".card").first().click();
    cy.get(".card").eq(1).click();
    cy.get(".card").eq(2).click();
    cy.get(".selected > .card-face").should("be.visible").and("have.length", 3);
  });

  it("prevents the player from clicking on more than 2 cards", () => {
    cy.get(".card").first().click();
    cy.get(".card").eq(10).click();
    cy.get(".card").eq(2).click();

    cy.get(".selected").should("have.length", 2);
  });

  it("allows the player to win the game", () => {
    cy.get(".card").each((card, index) => {
      cy.get(".card").eq(index).click();
    });

    cy.get("div > .card-back").should("have.length", 16).and("be.visible");
    cy.get("h4").should("have.text", "Wins: 1");
  });

  it("allows the player to start a new game", () => {
    cy.get(".card").first().click();
    cy.get(".card").eq(1).click();
    cy.get("button").click();

    cy.get(".selected").should("have.length", 0);
    cy.get("div > .card-back").should("have.length", 16).and("be.visible");
    cy.get("h4").should("have.text", "Wins: 0");
  });
});

export {};
