import { InventoryPage } from "../../pages/InventoryPage";
import { LoginPage } from "../../pages/LoginPage";

describe("Inventory sorting", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.login();
    inventoryPage.getInventoryItems().should("be.visible");
  });

  it("should sort products by name from A to Z", () => {
    inventoryPage.selectSortOption("az");

    inventoryPage.getProductNames().then((names) => {
      const sorted = [...names].sort();
      expect(names).to.deep.equal(sorted);
    });
  });

  it("should sort products by name from Z to A", () => {
    inventoryPage.selectSortOption("za");

    inventoryPage.getProductNames().then((names) => {
      const sorted = [...names].sort().reverse();
      expect(names).to.deep.equal(sorted);
    });
  });

  it("should sort products by price from low to high", () => {
    inventoryPage.selectSortOption("lohi");

    inventoryPage.getProductPrices().then((prices) => {
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sorted);
    });
  });

    it("should sort products by price from high to low", () => {
    inventoryPage.selectSortOption("hilo");

    inventoryPage.getProductPrices().then((prices) => {
      const sorted = [...prices].sort((a, b) => b - a);
      expect(prices).to.deep.equal(sorted);
    });
  });
});