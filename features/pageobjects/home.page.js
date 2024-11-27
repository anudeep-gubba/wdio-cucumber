const { $ } = require("@wdio/globals");

class HomePage {
  get lblProducts() {
    return $('android=new UiSelector().text("PRODUCTS")');
  }

  async verifyLogin() {
    const productsLabel = await this.lblProducts;
    await expect(productsLabel).toBeDisplayed();
  }
}

module.exports = new HomePage();
