class SalesNoteView {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.locator("//div[3]//div[1]//img[1]");
      
    }
  }
  
  module.exports = SalesNoteView;