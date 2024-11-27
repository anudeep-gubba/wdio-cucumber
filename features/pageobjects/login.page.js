const { $ } = require("@wdio/globals");

class LoginPage {
  get inputUsername() {
    return $("~test-Username");
  }

  get inputPassword() {
    return $("~test-Password");
  }

  get btnLogin() {
    return $("~test-LOGIN");
  }

  async enterUsername(username) {
    await this.inputUsername.setValue(username);
  }

  async enterPassword(password) {
    await this.inputPassword.setValue(password);
  }

  async clickLogin() {
    await this.btnLogin.click();
  }
}

module.exports = new LoginPage();
