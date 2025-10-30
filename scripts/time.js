const date = document.getElementById("time_date");
const time = document.getElementById("time_time");
const greeting = document.getElementById("greeting");

const locale = navigator.language;
const dateFormatter = new Intl.DateTimeFormat(locale, {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
const timeFormatter = new Intl.DateTimeFormat(locale, {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

function dynamicTime() {
  const now = new Date();

  date.textContent = dateFormatter.format(now);
  time.textContent = timeFormatter.format(now);

  showGreeting(now.getHours());

  setTimeout(dynamicTime, 1000);
}

function showGreeting(hour) {
  let message = "";
  if (hour < 12) message = "🌞 Good morning!";
  else if (hour < 18) message = "🌤️ Good afternoon!";
  else message = "🌙 Good evening!";

  greeting.textContent = message;
}

dynamicTime();
