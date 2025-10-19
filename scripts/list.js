const container = document.getElementById("tapestryContainer");
const button = document.getElementById("seeMore");

const apiUrl = "https://kuizine-backend.onrender.com/food";

button.addEventListener("click", async () => {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) throw new Error("Failed to fetch cuisines from api");

        const cuisines = await response.json();

        cuisines.forEach(cuisine => {
            const div = document.createElement("div");
            div.classList.add("cuisineContainer");
            div.innerHTML = `
            <h3>${cuisine.name}</h3>
            <p>${cuisine.description}</p>
            `;
            container.insertBefore(div, button);
        });

        button.hidden = true;

    } catch(error) {
        console.error(error);
    }
});
