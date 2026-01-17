const car = document.getElementById("car");

let position = 0;
let moveInterval;

car.addEventListener("mouseenter", () => {
    moveInterval = setInterval(() => {
        if (position < window.innerWidth - 100) {
            position += 5;
            car.style.left = position + "px";
        }
    }, 20);
});

car.addEventListener("mouseleave", () => {
    clearInterval(moveInterval);
});
