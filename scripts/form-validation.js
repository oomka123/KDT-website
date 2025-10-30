$(document).ready(function () {
  const loginContainer = $("#login-container");
  const userContainer = $("#user-container");
  const userNick = $("#user-nick");
  const logoutBtn = $("#logout-btn");

  const loginPopup = $("#login-popup");
  const loginBtn = $("#login-btn");
  const popupClose = $(".popup-close");
  const form = $("#login-form");

  // Проверка при загрузке страницы
  function checkLogin() {
    const storedNick = localStorage.getItem("nickname");
    if (storedNick) {
      loginContainer.hide();
      userNick.text(storedNick);
      userContainer.show();
    } else {
      loginContainer.show();
      userContainer.hide();
    }
  }

  checkLogin();

  // Открытие popup
  loginBtn.on("click", () => loginPopup.show());

  // Закрытие popup
  popupClose.on("click", () => loginPopup.hide());
  $(window).on("click", (e) => {
    if ($(e.target).is(loginPopup)) loginPopup.hide();
  });

  // Отправка формы
  form.on("submit", function (e) {
    e.preventDefault();
    const nickname = $("#nickname").val().trim();
    const password = $("#password").val().trim();

    if (!nickname || !password) {
      alert("Please fill in both fields.");
      return;
    }

    localStorage.setItem("nickname", nickname);
    localStorage.setItem("password", password); // опционально

    form.trigger("reset");
    loginPopup.hide();
    checkLogin();
  });

  // Log Out
  logoutBtn.on("click", function () {
    localStorage.removeItem("nickname");
    localStorage.removeItem("password");
    checkLogin();
  });
});
