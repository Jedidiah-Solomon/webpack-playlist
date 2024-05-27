/// <reference types="cypress" />

// Import the math module directly
const { add, subtract, multiply, divide } = require("../../src/scripts/math");

describe("Math.js tests", () => {
  it("should test add", () => {
    expect(add(2, 2)).to.equal(4);
  });

  it("should test subtract", () => {
    expect(subtract(2, 2)).to.equal(0);
  });

  it("should test divide", () => {
    expect(divide(2, 2)).to.equal(1);
  });

  it("should test multiply", () => {
    expect(multiply(2, 2)).to.equal(4);
  });
});
