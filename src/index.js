import "./styles.css";
import { cacheDOM } from "./util";
import buildHome from "./home";

const domElements = cacheDOM();
const home = buildHome(domElements);
home.renderHome();