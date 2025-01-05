import {
  getElementBySelectorOrId,
  createElement,
  writeToElement,
} from "./util";

import blueberryBurst from "../assets/blueberry_burst.png";
import heavenlyVanilla from "../assets/heavenly_vanilla.png";
import caramelDelight from "../assets/caramel_delight.png";
import cookieCraze from "../assets/cookie_craze.png";
import lemonZest from "../assets/lemon_zest.png";
import mintyFresh from "../assets/minty_fresh.png";
import strawberrySenses from "../assets/strawberry_senses.png";
import chocolateBliss from "../assets/chocolate_bliss.png";
import tropicalTwist from "../assets/tropical_twist.png";

export default function buildHome(domElements) {
  const aboutUsText = `At The Frosted Scoop, we believe that every scoop is a moment of joy. 

    Nestled in the heart of the neighborhood, our cozy ice cream shop is dedicated to serving up the creamiest, dreamiest ice cream made from the finest locally sourced ingredients. 

    Whether you're craving a classic vanilla swirl or something more adventurous like our signature caramelized lavender crunch, we’ve got a flavor to satisfy every sweet tooth!`;

  const menuSectionText = `Our handcrafted ice creams are made with the finest ingredients, bursting with unique flavors that promise to tantalize your taste buds. 
    
    From creamy classics to inventive creations, our menu has something for everyone to enjoy. 
    
    Explore our wide variety of delicious options!`;

  const aboutUsSection = createElement("div", { class: "about-us" });
  const menuSection = createElement("div", { class: "menu-section" });
  const menuSectionWrapper = createElement("div", {
    id: "menu-section-wrapper",
  });
  const descriptionHeader = createElement("h2");
  const descriptionText = createElement("p");
  const menuHeader = createElement("h2");
  const productHeaderText = createElement("p");
  const productGrid = createElement("div", { class: "product-grid" });
  const menuText = createElement("p", { class: "menu-text" });
  const productFooterText = createElement("p", {
    class: "product-footer-text",
  });

  const products = [
    { name: "Blueberry Burst", image: blueberryBurst },
    { name: "Heavenly Vanilla", image: heavenlyVanilla },
    { name: "Caramel Delight", image: caramelDelight },
    { name: "Cookie Craze", image: cookieCraze },
    { name: "Lemon Zest", image: lemonZest },
    { name: "Minty Fresh", image: mintyFresh },
    { name: "Strawberry Senses", image: strawberrySenses },
    { name: "Chocolate Bliss", image: chocolateBliss },
    { name: "Tropical Twist", image: tropicalTwist },
  ];

  const renderHome = () => {
    domElements.mainContent.append(aboutUsSection, menuSectionWrapper);
    aboutUsSection.append(descriptionHeader, descriptionText);
    menuSectionWrapper.append(menuSection);
    observer.observe(menuSection);
    menuSection.append(menuHeader, productHeaderText, menuText, productGrid);

    for (let i = 0; i < products.length; i++) {
      const product = createElement("div", {
        class: "grid-item",
        position: i + 1,
      });
      const productText = createElement("p", { class: "product text" });
      productGrid.appendChild(product);
    }
    productGrid.appendChild(productFooterText);
    writeToElement(descriptionHeader, "About us..");
    writeToElement(descriptionText, aboutUsText);
    writeToElement(menuHeader, "Our Menu");
    writeToElement(
      productHeaderText,
      "See below for our selection of delicious products: "
    );
    writeToElement(
      productFooterText,
      "Please be aware that our products are crafted in a facility that handles various allergens."
    );
    writeToElement(menuText, menuSectionText);
    generateProductImages();
  };

  const generateProductImages = () => {
    for (let i = 0; i < products.length; i++) {
      const gridItem = getElementBySelectorOrId(`[position="${i + 1}"]`);
      const image = new Image();
      image.src = products[i].image;
      gridItem.append(image);
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        menuSection.classList.add("animate");
        observer.unobserve(menuSection);
      }
    });
  });

  return { renderHome };
}
