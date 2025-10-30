$(document).ready(function () {
  // Быстрый debug-индикатор
  console.log("contact.js loaded");

  const loginPopup = $("#login-popup");
  const loginBtn = $("#login-btn");
  const closePopup = $(".popup-close");
  const loginForm = $("#login-form");
  const loginContainer = $("#login-container");
  const userContainer = $("#user-container");
  const userNick = $("#user-nick");
  const logoutBtn = $("#logout-btn");

  // Покажем, какие элементы найдены
  console.log("selectors found:", {
    loginBtn: loginBtn.length,
    loginPopup: loginPopup.length,
    closePopup: closePopup.length,
    loginForm: loginForm.length,
    loginContainer: loginContainer.length,
    userContainer: userContainer.length,
    userNick: userNick.length,
    logoutBtn: logoutBtn.length,
  });

  if (!loginPopup.length)
    console.warn("Warning: #login-popup not found in DOM");
  if (!loginBtn.length) console.warn("Warning: #login-btn not found in DOM");

  // === Обновление статуса ===
  function updateLoginStatus() {
    const nick = localStorage.getItem("nickname");
    if (nick) {
      if (userNick.length) userNick.text(nick);
      loginContainer.hide();
      userContainer.show();
    } else {
      userContainer.hide();
      loginContainer.show();
    }
  }

  updateLoginStatus();

  // === Открытие / Закрытие popup ===
  // используем делегированные обработчики, чтобы сработало в любом случае
  $(document).on("click", "#login-btn", function () {
    if (!loginPopup.length) return;
    loginPopup.fadeIn(200);
  });

  $(document).on("click", ".popup-close", function () {
    if (!loginPopup.length) return;
    loginPopup.fadeOut(200);
  });

  // Закрыть по клику на фон (целевой элемент — сам #login-popup)
  $(document).on("click", function (e) {
    if (!loginPopup.length) return;
    if ($(e.target).is("#login-popup")) {
      loginPopup.fadeOut(200);
    }
  });

  // === Логин ===
  $(document).on("submit", "#login-form", function (e) {
    e.preventDefault();
    const nickname = $("#login-popup #nickname").val()
      ? $("#login-popup #nickname").val().trim()
      : "";
    const password = $("#login-popup #password").val()
      ? $("#login-popup #password").val().trim()
      : "";

    console.log("Attempt login with:", {
      nickname,
      passwordLength: password.length,
    });

    if (nickname.length < 3) {
      alert("Nickname must be at least 3 characters.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    localStorage.setItem("nickname", nickname);
    localStorage.setItem("password", password);
    if (loginPopup.length) loginPopup.fadeOut(200);
    if (loginForm.length) loginForm.trigger("reset");
    updateLoginStatus();
  });

  // === Logout ===
  $(document).on("click", "#logout-btn", function () {
    localStorage.removeItem("nickname");
    localStorage.removeItem("password");
    updateLoginStatus();
  });
});
