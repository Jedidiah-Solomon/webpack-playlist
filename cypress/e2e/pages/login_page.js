export class LoginPage {
  username_txtbox =
    ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  password_textbox =
    ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
  login_btn = ".oxd-button";

  enterUsername(yourUsername) {
    cy.get(this.username_txtbox).type(yourUsername);
  }

  enterPassword(yourPassword) {
    cy.get(this.password_textbox).type(yourPassword);
  }

  clickLogin() {
    cy.get(this.login_btn).click();
  }
}
