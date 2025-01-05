import "./styles.css";
import { cacheDOM } from "./modules/util";
import buildHome from "./modules/home";

function init() {
  const domElements = cacheDOM();
  const home = buildHome(domElements);
  home.renderHome();
}

document.addEventListener("DOMContentLoaded", init);
