function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    document.getElementById("greeting").textContent = greeting;
}

function updateTime() {
    const now = new Date();

    document.getElementById("time").textContent =
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
}

setInterval(updateTime, 1000);
updateTime();

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

updateGreeting();
updateTime();
