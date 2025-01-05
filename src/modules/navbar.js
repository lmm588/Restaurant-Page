import { getElementBySelectorOrId, cacheDOM } from "./util";


export function navButtonsEventListeners() {
const homeButton = getElementBySelectorOrId("[location = 'home']");
const menuButton = getElementBySelectorOrId("[location = 'menu']");
const contactButton = getElementBySelectorOrId("[location = 'contact-us']");
const domElements = cacheDOM();

const menuButtonEventListener = () => {
  menuButton.addEventListener("click", () => {
    domElements.menuSection.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  });
}

const homeButtonEventListener = () => {
    homeButton.addEventListener("click", () => {
      domElements.aboutUs.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    });
  }

  const contactButtonEventListener = () => {
    contactButton.addEventListener("click", () => {
      domElements.contactUs.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    });
  }

  menuButtonEventListener();
  homeButtonEventListener();
  contactButtonEventListener();
}