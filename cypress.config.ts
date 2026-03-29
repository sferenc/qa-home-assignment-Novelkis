import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  env: {
    sauceUsername: process.env.SAUCE_USERNAME,
    saucePassword: process.env.SAUCE_PASSWORD,
    reqresApiKey: process.env.REQRES_API_KEY,
  },
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});