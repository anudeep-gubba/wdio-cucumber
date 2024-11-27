const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const HomePage = require("../pageobjects/home.page");

Given(/^SwagLabs application is opened$/, async () => {
  const usernameField = await LoginPage.inputUsername;
  await expect(usernameField).toBeDisplayed();
});

When(
  /^I enter the username (.*) and password (.*)$/,
  async (username, password) => {
    await LoginPage.enterUsername(username);
    await LoginPage.enterPassword(password);
  }
);

When(/^I click the login button$/, async () => {
  await LoginPage.clickLogin();
});

Then(/^I should see the error (.*)$/, async (result_message) => {
  const errorMessage = await $(
    `android=new UiSelector().text("${result_message}")`
  );
  await errorMessage.waitForDisplayed({ timeout: 5000 });
  const isDisplayed = await errorMessage.isDisplayed();
  expect(isDisplayed).toBe(true);
});

Then(/^I should see the PRODUCTS page$/, async () => {
  await HomePage.verifyLogin();
});
