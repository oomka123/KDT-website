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

dynamicTime();