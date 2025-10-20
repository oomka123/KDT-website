document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("login-popup");
  const openBtn = document.getElementById("login-btn");
  const closeBtn = popup.querySelector(".popup-close");
  const steps = popup.querySelectorAll(".login-step");
  const nextBtn = popup.querySelector(".next-btn");
  const backBtn = popup.querySelector(".back-btn");
  const form = document.getElementById("login-form");
  const feedback = document.getElementById("login-feedback");

  let step = 0;

  // Show a specific step
  function showStep(index) {
    steps.forEach((s, i) => s.classList.toggle("active", i === index));
    step = index;
  }

  // Open popup
  openBtn.onclick = () => {
    popup.style.display = "flex";
    showStep(0);
    refreshStatus();
  };

  // Close popup
  const closePopup = () => {
    popup.style.display = "none";
    form.reset();
    refreshStatus();
  };
  closeBtn.onclick = closePopup;

  // Refresh feedback text
  function refreshStatus() {
    feedback.textContent = "";
    feedback.style.color = "";
  }

  // Navigation buttons
  nextBtn.onclick = () => showStep(step + 1);
  backBtn.onclick = () => showStep(step - 1);

  // Submit login form
  form.onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    refreshStatus();
    feedback.textContent = "⏳ Checking...";
    feedback.style.color = "blue";

    setTimeout(() => {
      if (email === "test@example.com" && password === "12345") {
        feedback.textContent = "✅ Login successful!";
        feedback.style.color = "green";
        setTimeout(closePopup, 1500);
      } else {
        feedback.textContent = "❌ Invalid credentials. Try again.";
        feedback.style.color = "red";
      }
    }, 1000);
  };

  // ESC to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup.style.display === "flex") {
      closePopup();
    }
  });
});