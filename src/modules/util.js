//Misc utility functions

export function cacheDOM() {
  return {
    mainContent: getElementBySelectorOrId("#content"),
    navBar: getElementBySelectorOrId("nav"),
    body: getElementBySelectorOrId("body"),
    header: getElementBySelectorOrId("header"),
    gridItems: document.querySelectorAll(".grid-item"),
    menuSection: getElementBySelectorOrId(".menu-section"),
    aboutUs: getElementBySelectorOrId(".about-us"),
  };
}

export function getElementBySelectorOrId(selector) {
  if (selector.startsWith("#")) {
    return document.getElementById(selector.slice(1));
  }
  return document.querySelector(selector);
}

export function createElement(tagName, attributes = {}) {
  const element = document.createElement(`${tagName}`);
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  return element;
}

export function writeToElement(element, message) {
  if (element instanceof Element) {
    element.innerText = message;
  } else {
    throw new Error("Element is not valid.");
  }
}
