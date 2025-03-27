function pad(number) {
    return number < 10 ? '0' + number : number;
}

function updateClock() {
    const now = new Date();
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    document.getElementById('date').innerText = dateString;
}

// Update clock immediately
updateClock();
// Then update every second
setInterval(updateClock, 1000);