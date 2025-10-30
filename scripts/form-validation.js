$(document).ready(function () {
  const form = $("#signupForm");

  form.on("submit", function (event) {
    event.preventDefault(); // Stop page reloading

    // Get values
    const fullName = $("#full-name").val().trim();
    const email = $("#email").val().trim();
    const select = $("#select-where").val();

    // Remove old errors
    $(".error-message").remove();
    $("input, select").removeClass("is-invalid");

    let isValid = true;

    // Error display function
    function showError(id, message) {
      const input = $("#" + id);
      const error = $(
        '<div class="error-message text-danger mt-1"></div>'
      ).text(message);

      if (input.parent().hasClass("input-group")) {
        input.parent().parent().append(error);
      } else {
        input.parent().append(error);
      }

      input.addClass("is-invalid");
      isValid = false;
    }

    // Validation checks
    if (!fullName) showError("full-name", "Full name is required.");
    if (!email) {
      showError("email", "Email is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("email", "Please enter a valid email address.");
    }
    if (!select) showError("select-where", "Please select an option.");

    // Notifications
    if (!isValid) {
      showNotification("❌ Please fix the errors and try again.", "error");
      return;
    }

    // If everything is correct
    showNotification("✅ Form submitted successfully!", "success");
  });

  // Notification function
  function showNotification(message, type = "success") {
    const container = $("#notification-container");
    const colors = {
      success: "#28a745",
      error: "#dc3545",
      info: "#0d6efd",
    };

    const notification = $("<div class='notification'></div>")
      .text(message)
      .css("background-color", colors[type]);

    container.append(notification);

    // Smooth appearance
    setTimeout(() => notification.addClass("show"), 10);

    // Disappear after 3 seconds
    setTimeout(() => {
      notification.removeClass("show");
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
});
