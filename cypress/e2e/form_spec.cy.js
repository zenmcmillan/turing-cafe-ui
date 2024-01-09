describe("Reservations Form", () => {
  beforeEach(() => {
    //SPY, STUB, INTERCEPT

    // SPYing on the GET request at localhost:3001
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      //STUBBING with this data
      fixture: "testData.json"
    })
  cy.visit("http://localhost:3000/");
  });

  it("should have form with four inputs, a button and a header and fill form out and post it", () => {

    cy.get("h1").contains("Turing Cafe Reservations");

    cy.get("form")
      .get('input[name="name"]')
      .type("Zen")
      .should("have.value", "Zen")
      .get('input[name="date"]')
      .type("2024-01-09")
      .should("have.value", "2024-01-09")
      .get('input[name="time"]')
      .type("11:30")
      .should("have.value", "11:30")
      .get('input[name="guests"]')
      .type(4)
      .should("have.value", 4);

    cy.get("form").contains("button", "Make Reservation")
  });

  it("it should see two reservations on the page", () => {
    cy.get('.reservations-container').children().should('have.length', 2)

    cy.get('.reservations-container').first().contains('Christie')
    .get('.reservations-container').first().contains('Date: 12/29')
    .get('.reservations-container').first().contains('Time: 7:00')
    .get('.reservations-container').first().contains('Number Of Guests: 12')

    cy.get('.reservations-container').last().contains('Leta')
    .get('.reservations-container').last().contains('Date: 4/5')
    .get('.reservations-container').last().contains('Time: 7:00')
    .get('.reservations-container').last().contains('Number Of Guests: 2')
  });

  it("should post form input data and show it in the UI", () => {
    
    cy.intercept("POST", "http://localhost:3001/api/v1/reservations", {
      statusCode: 201,
      fixture: "reservationsPost.json"
    });

    cy.get("form")
      .get('input[name="name"]')
      .type("Zen")
      .should("have.value", "Zen")
      .get('input[name="date"]')
      .type("01/09")
      .should("have.value", "01/09")
      .get('input[name="time"]')
      .type("11:30")
      .should("have.value", "11:30")
      .get('input[name="guests"]')
      .type(4)
      .should("have.value", 4);

      cy.get('button[name="reserve"]').click()

  })

});