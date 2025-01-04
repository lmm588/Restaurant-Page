import "./styles.css";
import { cacheDOM } from "./modules/util";
import buildHome from "./modules/home";

const domElements = cacheDOM();
const home = buildHome(domElements);
home.renderHome();