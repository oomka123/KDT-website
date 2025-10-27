$(document).ready(function () {
  $("#copyBtn").on("click", function () {
    // We get the text of the dish (you can combine all the contents)
    const dishText = `
        ${$(".dishType").text()}
        ${$(".dishIngredients").text()}
        ${$(".dishDesc").text()}
      `.trim();

    if (!dishText) {
      alert("There is no information to copy yet!");
      return;
    }

    // Copy to the buffer
    navigator.clipboard.writeText(dishText).then(() => {
      // Showing the notification
      const notif = $("#copyNotification");
      notif.addClass("show");

      // Hiding in 2 seconds
      setTimeout(() => {
        notif.removeClass("show");
      }, 2000);
    });
  });
});
