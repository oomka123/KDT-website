<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("dish-popup");
  const popupTitle = document.getElementById("popup-title");
  const popupImage = document.getElementById("popup-image");
  const popupDescription = document.getElementById("popup-description");
  const closeBtn = popup.querySelector(".popup-close");

  // Dishes info
  const dishes = [
    {
      title: "Beshbarmak",
      img: "./images/besh.jpg",
      desc: "Beshbarmak is the national dish of Kazakhstan made with boiled meat, noodles, and rich broth — a symbol of hospitality."
    },
    {
      title: "Baursaks",
      img: "./images/baursak.png",
      desc: "Baursaks are fluffy golden fried bread pieces, often served with tea during celebrations and family gatherings."
    },
    {
      title: "Kumis",
      img: "./images/kumuz.jpg",
      desc: "Kumis is a traditional fermented mare’s milk drink, known for its refreshing and slightly tangy taste."
    }
  ];

  let currentIndex = 0;

  // Function to show popup for specific dish
  function showPopup(index) {
    const dish = dishes[index];
    popupTitle.textContent = dish.title;
    popupImage.src = dish.img;
    popupDescription.textContent = dish.desc;
    popup.style.display = "flex";
    currentIndex = index;
  }

  // Select "Learn More" buttons
  const learnMoreButtons = document.querySelectorAll(".card .btn.btn-mantis");
  learnMoreButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      showPopup(index);
    });
  });

  // Close popup
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Close popup by clicking outside
  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });

  // Keyboard Event Handling
  document.addEventListener("keydown", (event) => {
    if (popup.style.display === "flex") {
      if (event.key === "Escape") {
        // Close popup
        popup.style.display = "none";
      } else if (event.key === "ArrowRight") {
        // Next dish
        currentIndex = (currentIndex + 1) % dishes.length;
        showPopup(currentIndex);
      } else if (event.key === "ArrowLeft") {
        // Previous dish
        currentIndex = (currentIndex - 1 + dishes.length) % dishes.length;
        showPopup(currentIndex);
      }
    }
  });
});
=======
// Select all "Learn More" buttons
const learnMoreButtons = document.querySelectorAll(".btn-mantis.btn-sm");

learnMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Find the card that button belongs to
    const card = button.closest(".card");
    const title = card.querySelector(".card-title").textContent;
    const description = card.querySelector(".card-text").textContent;

    // Show popup
    alert(`${title}\n\n${description}`);
  });
});
>>>>>>> 6dfd8d549b197cb34d0aa7c7dfc374f2c8f61ce7
