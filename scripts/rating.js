document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, cardIndex) => {
    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("ratingContainer");

    const ratingText = document.createElement("p");
    ratingText.style.marginTop = "1rem";

    // Получаем сохраненный рейтинг для этой карточки
    const savedRating = localStorage.getItem(`cardRating-${cardIndex}`) || 0;
    ratingContainer.dataset.rating = savedRating;

    ratingText.textContent = `Rated: ${savedRating} / 5 ⭐`;

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("ion-icon");
      star.name = i < savedRating ? "star" : "star-outline";
      star.style.fontSize = "1.5rem";
      star.style.cursor = "pointer";
      star.style.transition = "color 0.2s";
      star.style.color = i < savedRating ? "gold" : "#ccc";

      // Hover effect
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

      // Click to rate
      star.addEventListener("click", () => {
        ratingContainer.dataset.rating = i + 1;
        ratingText.textContent = `Rated: ${i + 1} / 5 ⭐`;

        // Сохраняем рейтинг в localStorage
        localStorage.setItem(`cardRating-${cardIndex}`, i + 1);

        const stars = ratingContainer.querySelectorAll("ion-icon");
        stars.forEach((s, index) => {
          s.name = index <= i ? "star" : "star-outline";
          s.style.color = index <= i ? "gold" : "#ccc";
        });
      });

      ratingContainer.appendChild(star);
    }

    card.querySelector(".card-body").appendChild(ratingContainer);
    card.querySelector(".card-body").appendChild(ratingText);
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const cards = document.querySelectorAll(".card");

//   cards.forEach((card) => {
//     const ratingContainer = document.createElement("div");
//     ratingContainer.classList.add("ratingContainer");
//     const ratingText = document.createElement("p");
//     ratingText.textContent = "Rated: 0 / 5 ⭐";
//     ratingText.style.marginTop = "1rem";

//     for (let i = 0; i < 5; i++) {
//       const star = document.createElement("ion-icon");
//       star.name = "star-outline";
//       star.style.fontSize = "1.5rem";
//       star.style.cursor = "pointer";
//       star.style.transition = "color 0.2s";
//       star.style.color = "#ccc";
//       star.addEventListener("mouseover", () => {
//         const stars = ratingContainer.querySelectorAll("ion-icon");
//         stars.forEach((s, index) => {
//           s.name = index <= i ? "star" : "star-outline";
//           s.style.color = index <= i ? "gold" : "#ccc";
//         });
//       });

//       star.addEventListener("mouseout", () => {
//         const stars = ratingContainer.querySelectorAll("ion-icon");
//         stars.forEach((s, index) => {
//           s.name =
//             index < ratingContainer.dataset.rating ? "star" : "star-outline";
//           s.style.color =
//             index < ratingContainer.dataset.rating ? "gold" : "#ccc";
//         });
//       });

//       // When user clicks on a star
//       star.addEventListener("click", () => {
//         ratingContainer.dataset.rating = i + 1;
//         ratingText.textContent = `Rated: ${i + 1} / 5 ⭐`;

//         const stars = ratingContainer.querySelectorAll("ion-icon");
//         stars.forEach((s, index) => {
//           s.name = index <= i ? "star" : "star-outline";
//           s.style.color = index <= i ? "gold" : "#ccc";
//         });
//       });

//       ratingContainer.appendChild(star);
//     }

//     ratingContainer.dataset.rating = 0;

//     card.querySelector(".card-body").appendChild(ratingContainer);
//     card.querySelector(".card-body").appendChild(ratingText);
//   });
// });
