const dish = {
  name: "Beshbarmak",
  type: "Main Dish",
  ingredients: ["Boiled Dough", "Lamb or Beef", "Onions", "Broth"],
  description:
    "Beshbarmak is the national dish of Kazakhstan, made with boiled meat (usually lamb or beef) served over flat noodles and topped with onion sauce. The name 'Beshbarmak' means 'five fingers' because it is traditionally eaten by hand.",

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

// Render info on load
dish.render();

// Add button event
document
  .getElementById("infoBtn")
  .addEventListener("click", () => dish.showInfo());
