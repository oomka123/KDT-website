// // scripts/rating.js

// document.addEventListener("DOMContentLoaded", () => {
//   const cards = document.querySelectorAll(".card");

//   cards.forEach(card => {
//     const ratingBox = document.createElement("div");
//     const ratingText = document.createElement("p");
//     ratingText.textContent = "Rated: 0 / 5 ⭐";

//     for (let i = 0; i < 5; i++) {
//       const star = document.createElement("ion-icon");
//       star.name = "star-outline";
//       ratingBox.appendChild(star);

//       // When user clicks on a star
//       star.addEventListener("click", () => {
//         const stars = ratingBox.querySelectorAll("ion-icon");
//         stars.forEach((s, index) => {
//           s.name = index <= i ? "star" : "star-outline";
//           s.style.color = index <= i ? "gold" : "black";
//         });

//         // Update rating text
//         ratingText.textContent = `Rated: ${i + 1} / 5 ⭐`;
//       });
//     }

//     // Add stars and text to the card
//     card.appendChild(ratingBox);
//     card.appendChild(ratingText);
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("ratingContainer");
    const ratingText = document.createElement("p");
    ratingText.textContent = "Rated: 0 / 5 ⭐";
    ratingText.style.marginTop = "1rem";

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("ion-icon");
      star.name = "star-outline";
      star.style.fontSize = "1.5rem";
      star.style.cursor = "pointer";
      star.style.transition = "color 0.2s";
      star.style.color = "#ccc";
      star.addEventListener("mouseover", () => {
        const stars = ratingContainer.querySelectorAll("ion-icon");
        stars.forEach((s, index) => {
          s.name = index <= i ? "star" : "star-outline";
          s.style.color = index <= i ? "gold" : "#ccc";
        });
      });

      star.addEventListener("mouseout", () => {
        const stars = ratingContainer.querySelectorAll("ion-icon");
        stars.forEach((s, index) => {
          s.name =
            index < ratingContainer.dataset.rating ? "star" : "star-outline";
          s.style.color =
            index < ratingContainer.dataset.rating ? "gold" : "#ccc";
        });
      });

      // When user clicks on a star
      star.addEventListener("click", () => {
        ratingContainer.dataset.rating = i + 1;
        ratingText.textContent = `Rated: ${i + 1} / 5 ⭐`;

        const stars = ratingContainer.querySelectorAll("ion-icon");
        stars.forEach((s, index) => {
          s.name = index <= i ? "star" : "star-outline";
          s.style.color = index <= i ? "gold" : "#ccc";
        });
      });

      ratingContainer.appendChild(star);
    }

    ratingContainer.dataset.rating = 0;

    card.querySelector(".card-body").appendChild(ratingContainer);
    card.querySelector(".card-body").appendChild(ratingText);
  });
});
