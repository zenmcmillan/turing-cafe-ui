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
  it("it should see two reservations on the page", () => {
    cy.get('.reservations-container').children().should('have.length', 2)

    cy.get('.reservations-container').first().contains('Christie')
    .get('.reservations-container').first().contains('Date: 12/29')
    .get('.reservations-container').first().contains('Time: 7:00')
    .get('.reservations-container').first().contains('Number Of Guests: 12')

    cy.get('.reservations-container').last().contains('Leta')
    .get('.reservations-container').last().contains('Date: 4/5')
    .get('.reservations-container').last().contains('Time: 7:00')
    .get('.reservations-container').last().contains('Number Of Guests: 12')
  });
});
