const dish = {
  name: "Baursak",
  type: "Bakery product",
  ingredients: ["dough"],
  description: "Baursak top",

  showInfo() {
    alert(
      `${this.name} — это ${this.type}. \nСостоит из: ${this.ingredients.join(
        ", "
      )}. \nDesc: ${this.description}`
    );
  },

  render() {
    document.querySelector(".dishType").textContent = `Type: ${this.type}`;
    document.querySelector(
      ".dishIngredients"
    ).textContent = `Ingredients:  ${this.ingredients.join(", ")}`;
  },
};

dish.render();

document
  .getElementById("infoBtn")
  .addEventListener("click", () => dish.showInfo());
