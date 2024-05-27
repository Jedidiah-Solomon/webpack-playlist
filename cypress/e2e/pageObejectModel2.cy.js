/// <reference types="cypress" />

import { LoginPage } from "./pages/login_page2";

const loginPage = new LoginPage();

it("Page Object Model", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  loginPage.enterUsername();
  loginPage.enterPassword();
  loginPage.clickLogin();
});
