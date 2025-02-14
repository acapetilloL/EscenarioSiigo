const { Given, When, Then } = require("@cucumber/cucumber");
const LoginAction = require("../actions/LoginAction");
const { urlDefine } = require("../support/utils");

Given("que estoy en el dashboard siigo{string} {string}", async function (env, country) {
    await LoginAction.doThis(this.page).navigateTo(await urlDefine(env, country));
    
  });
  
  When("seleccione Crear Una nota de Venta", async function () {
    await LoginAction.doThis(this.page).login("QAMXTEAMCMCTP17@yopmail.com", "qSZC2PKm!)");
    
  });
  
  Then("quedo en la plantilla principal Crear Nota de Venta", async function () {
    
  });