document.getElementById("yes-btn").addEventListener("click", function () {
    showNotification("Yay! Happy Valentine's Q 💙");
});

// No Button Moves Away
document.getElementById("no-btn").addEventListener("mouseover", function () {
    let button = document.getElementById("no-btn");
    let maxX = window.innerWidth - button.clientWidth - 20;
    let maxY = window.innerHeight - button.clientHeight - 20;
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;
    
    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
});

// Function to Show Notification
function showNotification(message) {
    let notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}
