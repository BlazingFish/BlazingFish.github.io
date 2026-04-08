const car = document.getElementById("car");
var vroom = 0

animationHub()

function animationHub(a) {
    console.log(car) // Animates the console

    vroom ++
    car.style.left = vroom + "px"

    requestAnimationFrame(animationHub);
};