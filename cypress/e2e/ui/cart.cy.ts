import { CartPage } from "../../pages/CartPage";
import { InventoryPage } from "../../pages/InventoryPage";
import { LoginPage } from "../../pages/LoginPage";

describe("Cart behavior", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();

  const firstProduct = "Sauce Labs Backpack";

  beforeEach(() => {
    loginPage.visit();
    loginPage.login();
    inventoryPage.getInventoryItems().should("be.visible");
  });

  it("should add a product to the cart from the inventory page", () => {
    inventoryPage.addProductToCartByName(firstProduct);

    inventoryPage.getCartBadge().should("have.text", "1");
    inventoryPage.openCart();

    cartPage.getCartList().should("be.visible");
    cartPage.getProductByName(firstProduct).should("be.visible");
  });

  it("should remove a product from the cart page", () => {
    inventoryPage.addProductToCartByName(firstProduct);
    inventoryPage.getCartBadge().should("have.text", "1");
    inventoryPage.openCart();

    cartPage.getProductByName(firstProduct).should("be.visible");
    cartPage.removeProductByName(firstProduct);

    cartPage.shouldNotContainProduct(firstProduct);
    inventoryPage.shouldNotShowCartBadge();
  });

  it("should remove a product from the inventory page", () => {
    inventoryPage.addProductToCartByName(firstProduct);
    inventoryPage.getCartBadge().should("have.text", "1");

    inventoryPage.removeProductByName(firstProduct);
    inventoryPage.shouldNotShowCartBadge();

    inventoryPage.openCart();
    cartPage.shouldNotContainProduct(firstProduct);
  });
});