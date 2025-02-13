document.getElementById("yes-btn").addEventListener("click", function () {
    let notification = document.createElement("div");
    notification.className = "notification";
    notification.innerHTML = "Yay! Happy Valentine's Q 💙";

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
});

document.getElementById("no-btn").addEventListener("mouseenter", moveButton);
document.getElementById("no-btn").addEventListener("touchstart", moveButton);

function moveButton() {
    let button = document.getElementById("no-btn");
    
    // Get the window width and height
    let maxX = window.innerWidth - button.clientWidth;
    let maxY = window.innerHeight - button.clientHeight;
    
    // Generate new random positions
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    // Apply new positions
    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}
