// Закрытие меню при клике на крестик (псевдоэлемент)
document
  .querySelector(".navbar-collapse")
  .addEventListener("click", function (e) {
    if (e.target === this && window.innerWidth < 992) {
      const bsCollapse = new bootstrap.Collapse(this, {
        toggle: true,
      });
    }
  });

// Закрытие меню при клике на ссылку (для мобильных)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    if (window.innerWidth < 992) {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });
});

// // Sidebar toggle функционал (пример)
// document
//   .getElementById("sidebar-toggle")
//   .addEventListener("click", function () {
//     alert("Sidebar toggle clicked! Здесь добавь свою логику для сайдбара.");
//   });

// // Theme toggle
// document.getElementById("theme-toggle").addEventListener("click", function () {
//   this.textContent = this.textContent === "🌙" ? "☀️" : "🌙";
// });

// // Music toggle
// document.getElementById("musicBtn").addEventListener("click", function () {
//   const music = document.getElementById("bgMusic");
//   if (music.paused) {
//     music.play();
//     this.textContent = "🔊";
//   } else {
//     music.pause();
//     this.textContent = "🔇";
//   }
// });

// // Login button
// document.getElementById("login-btn").addEventListener("click", function () {
//   alert("Login functionality here!");
// });
