/// <reference types="cypress" />

// Import the math module directly USING COMMON JS MODULE
const { add, subtract, multiply, divide } = require("../../src/scripts/math");

//import { add, subtract, multiply, divide } from './math';  --- using ES6

console.log(add(2, 3)); // 5
console.log(subtract(5, 3)); // 2
console.log(multiply(2, 3)); // 6
console.log(divide(6, 3)); // 2

describe("Math.js tests", () => {
  it("should test add", () => {
    // Wait for 3 seconds
    cy.wait(3000);
    expect(add(2, 2)).to.equal(4);
  });

  it("should test subtract", () => {
    // Wait for 3 seconds
    cy.wait(3000);
    expect(subtract(2, 2)).to.equal(0);
  });

  it("should test divide", () => {
    // Wait for 3 seconds
    cy.wait(3000);
    expect(divide(3, 2)).to.equal(1);
  });

  it("should test multiply", () => {
    // Wait for 3 seconds
    cy.wait(3000);
    expect(multiply(2, 2)).to.equal(4);
  });
});
