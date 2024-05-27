/// <reference types="cypress" />

import { LoginPage } from "./pages/login_page";

const loginPage = new LoginPage();

// describe("All Login Tests", () => {
//   it("Page Object Model 1", () => {
//     cy.visit(
//       "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//     );

//     loginPage.enterUsername("Admin");
//     loginPage.enterPassword("admin123");
//     loginPage.clickLogin();
//     cy.contains("Time at Work");
//   });
//   it("Page Object Model 2", () => {
//     cy.visit(
//       "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//     );

//     loginPage.enterUsername("FakeUsername");
//     loginPage.enterPassword("admin123");
//     loginPage.clickLogin();
//     cy.contains("Time at Work");
//   });
// });

//.only runs only that it block
// describe("All Login Tests 2", () => {
//   it.only("Page Object Model 3", () => {
//     cy.visit(
//       "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//     );

//     loginPage.enterUsername("Admin");
//     loginPage.enterPassword("admin123");
//     loginPage.clickLogin();
//     cy.contains("Time at Work");
//   });
//   it("Page Object Model 3", () => {
//     cy.visit(
//       "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//     );

//     loginPage.enterUsername("FakeUsername");
//     loginPage.enterPassword("admin123");
//     loginPage.clickLogin();
//     cy.contains("Time at Work");
//   });
// });

// //.skip --skips that block and run others
// describe("All Login Tests 2", () => {
//   it.skip("Page Object Model 5", () => {
//     cy.visit(
//       "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//     );

//     loginPage.enterUsername("Admin");
//     loginPage.enterPassword("admin123");
//     loginPage.clickLogin();
//     cy.contains("Time at Work");
//   });
//   it("Page Object Model 6", () => {
//     cy.visit(
//       "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//     );

//     loginPage.enterUsername("FakeUsername");
//     loginPage.enterPassword("admin123");
//     loginPage.clickLogin();
//     cy.contains("Time at Work");
//   });
// });

beforeEach(() => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});
//beforeEach() --hepls to avoid repetition -- if outside, preceeds all describe and outside individual blocks
describe("All Login Tests 2", () => {
  //You can pu the beforeEach here, to preceed every block inside this describe

  it("Page Object Model 7", () => {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    cy.contains("Time at Work");
  });
  it("Page Object Model 7", () => {
    loginPage.enterUsername("FakeUsername");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    cy.contains("Time at Work");
  });
});

//This is very good
