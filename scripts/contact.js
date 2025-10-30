$(document).ready(function () {
  let hideTimeout;

  $("#user-btn").on("mouseenter", function () {
    clearTimeout(hideTimeout); // отменяем таймер, если пользователь вернулся
    $("#logout-btn").fadeIn(150);
  });

  $("#user-container").on("mouseleave", function () {
    hideTimeout = setTimeout(() => {
      $("#logout-btn").fadeOut(300);
    }, 1000); // ждёт 2 секунды после ухода курсора
  });

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

  // === Popup при нажатии на ник ===
  $(document).on("click", "#user-btn", function () {
    const nickname = localStorage.getItem("nickname") || "(not set)";
    const password = localStorage.getItem("password") || "(not set)";

    $("#profile-nick").text(nickname);
    $("#profile-pass").text(password);

    $("#profile-popup").fadeIn(200);
  });

  // === Закрытие popup ===
  $(document).on("click", "#profile-popup .popup-close", function () {
    $("#profile-popup").fadeOut(200);
  });

  // Закрыть по клику на фон
  $(document).on("click", function (e) {
    if ($(e.target).is("#profile-popup")) {
      $("#profile-popup").fadeOut(200);
    }
  });

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
  // === Логин ===
  $(document).on("submit", "#login-form", function (e) {
    e.preventDefault();

    const nickname = $("#login-nickname").val().trim();
    const password = $("#password").val().trim();

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

    if ($("#login-popup").length) $("#login-popup").fadeOut(200);
    if ($("#login-form").length) $("#login-form").trigger("reset");

    updateLoginStatus();
  });

  // === Logout ===
  $(document).on("click", "#logout-btn", function () {
    localStorage.removeItem("nickname");
    localStorage.removeItem("password");
    updateLoginStatus();
  });
});
