const car = document.getElementById("car");
var vroom = 0

animationHub()

function animationHub(a) { // a is probably frame
    vroom ++
    car.style.left = vroom + "px"

    currentActivity()
    drawPeople()

    requestAnimationFrame(animationHub);
};