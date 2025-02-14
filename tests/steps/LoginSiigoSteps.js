const { Given, When, Then } = require("@cucumber/cucumber");
const LoginAction = require("../actions/LoginAction");
const { urlDefine } = require("../support/utils");

Given("que estoy en siigo {string} {string}", async function (env, country) {
    await LoginAction.doThis(this.page).navigateTo(await urlDefine(env, country));
    
  });
  
  When("Inicio sesión", async function () {
    await LoginAction.doThis(this.page).login("QAMXTEAMCMCTP17@yopmail.com", "qSZC2PKm!)");
    
  });
  
  Then("quedo en la vista del dashboard", async function () {
    
  });