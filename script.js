function updateTime() {
    let now = new Date();
    document.getElementById("time").innerText = "Time: " + now.toLocaleTimeString();
    
    let day = now.getDay();
    let weekendText = (day === 0 || day === 6) ? "It's the Weekend!" : "It's a Weekday.";
    document.getElementById("weekend").innerText = weekendText;
}

// Dummy Weather Function (You can replace it with an API)
function updateWeather() {
    document.getElementById("weather").innerText = "Weather: Sunny, 25°C";
}

// Update every second
setInterval(updateTime, 1000);
updateTime();
updateWeather();
