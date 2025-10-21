const dish = {
  name: "Baursak",
  type: "Bakery Product",
  ingredients: ["Flour", "Yeast", "Oil", "Salt"],
  lessDesc: "A traditional Kazakh fried bread, soft and golden.",
  description: `Baursak (also spelled boortsog or baursaki) is a traditional fried
dough food commonly found in Central Asian cuisines, particularly
in Kazakhstan, Kyrgyzstan, Uzbekistan, and Mongolia. It is made
from a simple dough consisting of flour, yeast, sugar, salt, and
water or milk. The dough is rolled out, cut into small pieces or
shapes (often squares or diamonds), and then deep-fried until
golden brown and puffy.`,

  showInfo() {
    alert(
      `${this.name} is a ${this.type}.\nIngredients: ${this.ingredients.join(
        ", "
      )}.\nDescription: ${this.description}`
    );
  },

  render() {
    document.querySelector(".dishType").textContent = `Type: ${this.type}`;
    document.querySelector(
      ".dishIngredients"
    ).textContent = `Ingredients: ${this.ingredients.join(", ")}`;
    document.querySelector(
      ".dishDesc"
    ).textContent = `Description: ${this.lessDesc}`;
  },
};

dish.render();

document
  .getElementById("infoBtn")
  .addEventListener("click", () => dish.showInfo());
