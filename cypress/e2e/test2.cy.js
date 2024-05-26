/// <reference types="cypress" />

describe("Home Page", () => {
  it("should load the front-page successfully", () => {
    // Set viewport size for this test only
    cy.viewport(1200, 945);
    //cy.viewport(768, 1024); //Tab -  Ipad - Portrait
    //cy.viewport(375, 667); //Mobile - Iphone x - Portrait

    cy.visit("/index.html");

    cy.contains("Jedybrown Ventures");
    cy.contains("Login").click(); //this clicks on the login link, shows the before and after page load

    // Check if the URL includes '/pages/login.html' (assuming this is a part of your URL after loading)
    cy.url().should("include", "/pages/login.html");

    // Interact with an input field and verify its value. Check auth too/validation
    //cy.get(".form-control").type("fake@email.com"); //this can only be called on a single element thus id is best not class except the class is just one in the page
    cy.get("#email").type("fake@email.com");
    //cy.get("#email").type("fakeemail.com"); //This will pull an error since user typed email without @
    cy.get("#email").should("have.value", "fake@email.com");
  });
});
