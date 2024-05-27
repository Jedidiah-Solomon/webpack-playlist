/// <reference types="cypress" />

describe("Assertions Demo", () => {
  it("should check various conditions on the page", () => {
    // Visit the example page
    cy.visit("https://example.cypress.io");

    // Click on the element containing the text 'get'
    cy.contains("get").click();

    // Get the button with id 'query-btn' and perform assertions on it
    cy.get("#query-btn")
      .should("contain", "Button")
      .and("have.class", "query-btn")
      .and("be.visible")
      .and("be.enabled");

    // Additional assertions using expect
    expect(true).to.be.true;

    // Check if a specific element has the correct text using expect
    cy.get("#query-btn").then(($btn) => {
      expect($btn.text().trim()).to.equal("Button");
    }); //without the trim, it will fail

    // Check if a specific element has the correct class using expect
    cy.get("#query-btn").then(($btn) => {
      expect($btn).to.have.class("query-btn");
    });

    // Check if an element is visible using expect
    cy.get("#query-btn").then(($btn) => {
      expect($btn).to.be.visible;
    });

    // Check if a specific value is as expected using expect
    const exampleValue = 10;
    expect(exampleValue).to.equal(10);

    // Check if a string contains another string using expect
    const exampleString = "Hello Cypress!";
    expect(exampleString).to.contain("Cypress");

    // Check if an array includes a specific item using expect
    const exampleArray = [1, 2, 3, 4];
    expect(exampleArray).to.include(2);

    // Check if a specific button has the correct text using assert.equal
    cy.get("#query-btn").then(($btn) => {
      assert.equal(
        $btn.text().trim(),
        "Button",
        "Button text should be 'Button'"
      );
    });

    // Example of an assertion that will fail
    /* assert.equal(
      "4,5",
      "Not Equal",
      "These two strings are not equal, this will fail"
    );*/

    // Example of a successful assertion
    assert.equal("4,5", "4,5", "These two strings are equal, this will pass");

    // Check if a specific element has the correct class using assert
    cy.get("#query-btn").then(($btn) => {
      assert.equal(
        $btn.hasClass("query-btn"),
        true,
        "Button should have class 'query-btn'"
      );
    });

    /* The text "Button should have class 'query-btn" in the assertion is a custom error message. This message is displayed when the assertion fails, helping you understand why the test did not pass. Including a descriptive error message can be very helpful when debugging failed tests because it provides context about what was expected. */

    assert.equal(4, "4", "This is equal");
    assert.strictEqual(4, "4", "This is not equal");
  });
});

//Use expect except u want assert but best choice by people is expect
