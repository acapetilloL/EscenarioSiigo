const LoginPage = require("../pages/LoginPage");

class LoginAction {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page); //  contruye un objeto para llamarlo
  }

  static doThis(page) {
    return new LoginAction(page);
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.loginPage.usernameInput.waitFor({ timeout: 20000 }); //aqui llama al elemento mapeado
    await this.loginPage.usernameInput.fill(username); //llena el campo 
    await this.loginPage.passwordInput.waitFor();
    await this.loginPage.passwordInput.fill(password);
    await this.loginPage.loginButton.waitFor();
    await this.loginPage.loginButton.click();
  }
}

module.exports = LoginAction;
