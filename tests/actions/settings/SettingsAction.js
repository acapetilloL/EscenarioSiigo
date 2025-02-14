const SettingsPage = require("../../pages/Settings/SettingsPage");

class SettingsAction {
  constructor(page) {
    this.settingsPage = new SettingsPage(page);
  }

  static doThis(page) {
    return new SettingsAction(page);
  }

  async goToPurchasingAndExpenses() {
    await this.settingsPage.purchasingAndExpensesOption.waitFor();
    await this.settingsPage.purchasingAndExpensesOption.click();
  }

  async documentsGoToPurchasingAndExpenses() {
    await this.settingsPage.documentsGoToPurchaseOrdersURL.waitFor();
    await this.settingsPage.documentsGoToPurchaseOrdersURL.click();
  }

  async goToSupportingDocument() {}

  async goToDebitMemoAdjustmentMemoSupportingDocument() {}
}

module.exports = SettingsAction;
