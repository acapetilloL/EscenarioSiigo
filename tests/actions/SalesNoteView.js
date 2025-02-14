const SalesNoteView = require("../pages/salesNoteView.js");

class SalesNoteView {
  constructor(page) {
    this.page = page;
    this.SalesNoteView = new SalesNoteView(page); //  contruye un objeto para llamarlo
  }

  static doThis(page) {
    return new SalesNoteView(page);
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    
    await this.loginPage.loginButton.click();
  }
}

module.exports = SalesNoteView;
