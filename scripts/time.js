const time = document.getElementById("time");

const dynamicTime = () => {
    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    let hour = today.getHours();
	if(hour < 10) {
        hour = "0" + hour;
    }

	let minutes = today.getMinutes();
	if(minutes < 10) {
        minutes = "0" + minutes;
    }

	let seconds = today.getSeconds();
	if(seconds < 10) { 
        seconds = "0" + seconds;
    }

    time.textContent = `${day}.${month}.${year}, ${hour}:${minutes}:${seconds}`;

    setTimeout(dynamicTime, 1000);
}

dynamicTime();