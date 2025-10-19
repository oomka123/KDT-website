document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop page reload

    // Get input values
    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const select = document.getElementById("select-where").value;

    // Remove old errors
    document.querySelectorAll(".error-message").forEach((el) => el.remove());
    document.querySelectorAll("input, select").forEach((el) => {
      el.classList.remove("is-invalid");
    });

    let isValid = true;

    // Helper to show error
    function showError(id, message) {
      const input = document.getElementById(id);
      const error = document.createElement("div");
      error.className = "error-message text-danger mt-1";
      error.textContent = message;

      if (input.parentNode.classList.contains("input-group")) {
        input.parentNode.parentNode.appendChild(error);
      } else {
        input.parentNode.appendChild(error);
      }

      input.classList.add("is-invalid");
      isValid = false;
    }

    // Validate fields
    if (!fullName) showError("full-name", "Full name is required.");

    if (!email) showError("email", "Email is required.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      showError("email", "Please enter a valid email address.");

    if (!select) showError("select-where", "Please select an option.");

    // If valid, success alert
    if (isValid) {
      alert("✅ Form submitted successfully!");
      form.reset();
    }
  });
});