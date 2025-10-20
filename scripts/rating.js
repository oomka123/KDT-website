// scripts/rating.js

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const ratingBox = document.createElement("div");
    const ratingText = document.createElement("p");
    ratingText.textContent = "Rated: 0 / 5 ⭐";

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("ion-icon");
      star.name = "star-outline";
      ratingBox.appendChild(star);

      // When user clicks on a star
      star.addEventListener("click", () => {
        const stars = ratingBox.querySelectorAll("ion-icon");
        stars.forEach((s, index) => {
          s.name = index <= i ? "star" : "star-outline";
          s.style.color = index <= i ? "gold" : "black";
        });

        // Update rating text
        ratingText.textContent = `Rated: ${i + 1} / 5 ⭐`;
      });
    }

    // Add stars and text to the card
    card.appendChild(ratingBox);
    card.appendChild(ratingText);
  });
});