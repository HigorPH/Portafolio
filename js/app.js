import { PortfolioController } from "./controller/portfolioController.js";

const app = document.getElementById("app");
const portfolioController = new PortfolioController(app);

portfolioController.init();