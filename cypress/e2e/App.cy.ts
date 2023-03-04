describe("Memory Game", () => {
  const GRID = ".grid";
  const CARDS = ".card";
  const HEADER_SCORE = "h4";
  const HEADER_TITLE = "h3";
  const BUTTON_START_OVER = "button";
  const CARD_FACE = ".selected > .card-face";
  const CARD_BACK = "div > .card-back";
  const CARD_SELECTED = ".selected";
  const CARD_MATCHED = ".matched";

  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the header", () => {
    cy.get(HEADER_SCORE).should("have.text", "Wins: 0");
    cy.get(HEADER_TITLE).should("have.text", "Memento 🔥");
    cy.get(BUTTON_START_OVER).should("have.text", "Start over");
  });

  it("displays a grid of cards", () => {
    cy.get(GRID).should("exist");
    cy.get(CARDS).should("have.length", 16);
    cy.get(CARD_BACK).should("have.length", 16).and("be.visible");
  });

  it("allows the player to view the face of a card", () => {
    cy.get(CARDS).first().click();
    cy.get(CARD_FACE).should("be.visible");
  });

  it("allows the player to match two cards", () => {
    cy.get(CARDS).first().click();
    cy.get(CARDS).eq(1).click();
    cy.get(CARD_FACE).should("be.visible").and("have.length", 2);
    cy.get(CARD_MATCHED).should("be.visible");
  });

  it("allows the player to see face of matched cards", () => {
    cy.get(CARDS).first().click();
    cy.get(CARDS).eq(1).click();
    cy.get(CARDS).eq(2).click();
    cy.get(CARD_FACE).should("be.visible").and("have.length", 3);
  });

  it("prevents the player from clicking on more than 2 cards", () => {
    cy.get(CARDS).first().click();
    cy.get(CARDS).eq(10).click();
    cy.get(CARDS).eq(2).click();

    cy.get(CARD_SELECTED).should("have.length", 2);
  });

  it("allows the player to win the game", () => {
    cy.get(CARDS).each((card, index) => {
      cy.get(CARDS).eq(index).click();
    });

    cy.get(CARD_BACK).should("have.length", 16).and("be.visible");
    cy.get(HEADER_SCORE).should("have.text", "Wins: 1");
  });

  it("allows the player to start a new game", () => {
    cy.get(CARDS).first().click();
    cy.get(CARDS).eq(1).click();
    cy.get(BUTTON_START_OVER).click();

    cy.get(CARD_SELECTED).should("have.length", 0);
    cy.get(CARD_BACK).should("have.length", 16).and("be.visible");
    cy.get(HEADER_SCORE).should("have.text", "Wins: 0");
  });
});

export {};
