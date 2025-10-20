document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById("greeting");
  const time = document.getElementById("time");

  function updateGreetingAndTime() {
    const now = new Date();
    const hour = now.getHours();

    let message;
    if (hour < 12) message = "🌞 Good morning!";
    else if (hour < 18) message = "🌤️ Good afternoon!";
    else message = "🌙 Good evening!";


    const formattedTime = now.toLocaleTimeString();

    greeting.textContent = message;
    time.textContent = formattedTime;
  }

  updateGreetingAndTime();
  setInterval(updateGreetingAndTime, 1000);
});