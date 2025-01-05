import "./styles.css";
import { cacheDOM } from "./modules/util";
import buildHome from "./modules/home";
import { navButtonsEventListeners } from "./modules/navbar";

function init() {
  const domElements = cacheDOM();
  const home = buildHome(domElements);
  home.renderHome();
  navButtonsEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
