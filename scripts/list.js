const container = document.getElementById("tapestryContainer");
const button = document.getElementById("seeMore");
const loader = document.getElementById("loadingSpinner");

const apiUrl = "https://kuizine-backend.onrender.com/food";

button.addEventListener("click", async () => {
  try {
    loader.style.display = "inline-block";
    button.style.display = "none";

    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch cuisines from API");

    const cuisines = await response.json();

    cuisines.forEach((cuisine) => {
      const div = document.createElement("div");
      div.classList.add("cuisineContainer");
      div.innerHTML = `
        <h3>${cuisine.name}</h3>
        <p>${cuisine.description}</p>
      `;
      container.insertBefore(div, button);
    });

    loader.style.display = "none";
    button.hidden = true;
  } catch (error) {
    console.error(error);
    loader.style.display = "none";
    button.style.display = "inline-block";
  }
});
