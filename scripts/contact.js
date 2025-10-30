document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const loginContainer = document.getElementById("login-container");
  const userContainer = document.getElementById("user-container");
  const userNick = document.getElementById("user-nick");
  const logoutBtn = document.getElementById("logout-btn");

  const popup = document.getElementById("login-popup");
  const closeBtn = popup.querySelector(".popup-close");
  const steps = popup.querySelectorAll(".login-step");
  const nextBtn = popup.querySelector(".next-btn");
  const backBtn = popup.querySelector(".back-btn");
  const form = document.getElementById("login-form");
  const feedback = document.getElementById("login-feedback");

  let step = 0;

  // === Авторизация через localStorage ===
  function updateUI() {
    const user = localStorage.getItem("userNick");
    if (user) {
      loginContainer.style.display = "none";
      userContainer.style.display = "block";
      userNick.textContent = user;
    } else {
      loginContainer.style.display = "block";
      userContainer.style.display = "none";
    }
  }

  updateUI();

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("userNick");
    updateUI();
  });

  // === Popup login ===
  function showStep(index) {
    steps.forEach((s, i) => s.classList.toggle("active", i === index));
    step = index;
  }

  loginBtn.onclick = () => {
    popup.style.display = "flex";
    showStep(0);
    refreshStatus();
  };

  const closePopup = () => {
    popup.style.display = "none";
    form.reset();
    refreshStatus();
  };
  closeBtn.onclick = closePopup;

  function refreshStatus() {
    feedback.textContent = "";
    feedback.style.color = "";
  }

  nextBtn.onclick = () => showStep(step + 1);
  backBtn.onclick = () => showStep(step - 1);

  form.onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const nick = document.getElementById("login-nick").value || "User";

    refreshStatus();
    feedback.textContent = "⏳ Checking...";
    feedback.style.color = "blue";

    setTimeout(() => {
      // Простейшая проверка (можно заменить на регистрацию)
      if (email && password) {
        feedback.textContent = "✅ Login successful!";
        feedback.style.color = "green";
        localStorage.setItem("userNick", nick); // сохраняем ник
        setTimeout(() => {
          closePopup();
          updateUI();
        }, 1000);
      } else {
        feedback.textContent = "❌ Invalid credentials.";
        feedback.style.color = "red";
      }
    }, 1000);
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup.style.display === "flex") {
      closePopup();
    }
  });
});
