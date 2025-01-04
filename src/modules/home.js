export default function buildHome(domElements) {

  function renderHome() {
    domElements.descriptionText.textContent = `At The Frosted Scoop, we believe that every scoop is a moment of joy. Nestled in the heart of the neighborhood, our cozy ice cream shop is dedicated to serving up the creamiest, dreamiest ice cream made from the finest locally sourced ingredients. Whether you're craving a classic vanilla swirl or something more adventurous like our signature caramelized lavender crunch, we’ve got a flavor to satisfy every sweet tooth.
    Our team of ice cream artisans handcraft each batch with love and creativity, ensuring every visit is a delightful experience. We also offer a variety of vegan, gluten-free, and dairy-free options, so everyone can indulge.
    Join us for a treat that’s more than just dessert—it's a celebration of the little joys in life. From family outings to spontaneous date nights, The Frosted Scoop is your go-to destination for sweetness, smiles, and a touch of magic in every cone!`;
    domElements.mainContent.appendChild(domElements.descriptionText);
  }

  function clearHome() {
    domElements.mainContent.textContent = "";
  }

  return { renderHome, clearHome };
}
