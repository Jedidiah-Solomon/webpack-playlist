/// <reference types="cypress" />

describe("Responsive Design Tests", () => {
  // Test for mobile view
  it("should display correctly on mobile devices", () => {
    // Set viewport size for mobile
    cy.viewport(375, 667); // iPhone 6/7/8

    cy.visit("https://e-commerce-shop-and-api-market-2.onrender.com/");

    cy.contains("Jedybrown Ventures");

    // Check URL after clicking login
    cy.url().should("include", "/pages/login.html");

    // Interact with an input field and verify its value
    cy.get("#email").type("fake@email.com");
    cy.get("#email").should("have.value", "fake@email.com");
  });

  // Test for tablet view
  it("should display correctly on tablets", () => {
    // Set viewport size for tablet
    cy.viewport(768, 1024); // iPad

    cy.visit("https://e-commerce-shop-and-api-market-2.onrender.com/");

    cy.contains("Jedybrown Ventures");
    cy.contains("Login").click();

    cy.url().should("include", "/pages/login.html");

    cy.get("#email").type("fake@email.com");
    cy.get("#email").should("have.value", "fake@email.com");
  });

  // Test for desktop view
  it("should display correctly on desktop devices", () => {
    // Set viewport size for desktop
    cy.viewport(1280, 720); // Desktop

    cy.visit("https://e-commerce-shop-and-api-market-2.onrender.com/");

    cy.contains("Jedybrown Ventures");
    cy.contains("Login").click();

    cy.url().should("include", "/pages/login.html");

    cy.get("#email").type("fake@email.com");
    cy.get("#email").should("have.value", "fake@email.com");
  });
});
