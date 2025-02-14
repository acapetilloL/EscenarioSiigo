class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("#siigoSignInName"); //Dentro de un shadow el primer id Username es el padre y despues llama al campo
    this.passwordInput = page.locator("#siigoPassword");
    this.loginButton = page.locator("#siigoNext");
  }
}

module.exports = LoginPage;
