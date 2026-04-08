const car = document.getElementById("car");
var vroom = 0

animationHub()

function animationHub(a) {
    vroom ++
    car.style.left = vroom + "px"

    

    requestAnimationFrame(animationHub);
};