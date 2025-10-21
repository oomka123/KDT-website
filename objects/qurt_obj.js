const dish = {
  name: "Qurt",
  type: "Traditional Snack",
  ingredients: ["Fermented Milk", "Salt"],
  description:
    "Qurt (or Kurt) is a traditional Central Asian dried snack made from fermented and salted dairy, typically sour milk or cottage cheese. It is shaped into small balls or discs and dried in the sun, resulting in a hard, salty snack rich in protein and minerals. Qurt can last for months without spoiling, making it perfect for long journeys.",

  showInfo() {
    alert(
      `${this.name} is a ${this.type}.\n\nIngredients: ${this.ingredients.join(
        ", "
      )}.\n\nDescription: ${this.description}`
    );
  },

  render() {
    document.querySelector(".dishType").textContent = `Type: ${this.type}`;
    document.querySelector(
      ".dishIngredients"
    ).textContent = `Ingredients: ${this.ingredients.join(", ")}`;
    document.querySelector(
      ".dishDesc"
    ).textContent = `Description: ${this.description}`;
  },
};

// Render info on page load
dish.render();

// Button click event
document
  .getElementById("infoBtn")
  .addEventListener("click", () => dish.showInfo());
