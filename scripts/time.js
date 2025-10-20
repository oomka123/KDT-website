const time = document.getElementById("time");

function dynamicTime(locale = navigator.language) {
    const today = new Date();

    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    const formatter = new Intl.DateTimeFormat(locale, options);

    time.textContent = formatter.format(today);

    setTimeout(() => dynamicTime(locale), 1000);
}
function showGreeting(hour) {
  let message = "";

  if (hour < 12) {
    message = "🌞 Good morning!";
  } else if (hour < 18) {
    message = "🌤️ Good afternoon!";
  } else {
    message = "🌙 Good evening!";
  }

  greeting.textContent = message;
}

dynamicTime();