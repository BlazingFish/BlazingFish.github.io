const car = document.getElementById("car");
var vroom = 0

animationHub()

function animationHub(a) { // a is probably frame
    vroom ++
    car.style.left = vroom + "px"
    
    // ctx.clearRect(0, 0, width, height)
    ctx.save()
    ctx.scale(width, height)
    // for (i = 0; i < tiles.length; i++) {
    //     for (j = 0; j < tiles[0].length; j++) {
    //         drawTiles(i, j)
    //     }
    // }
    ctx.restore()

    currentActivity()
    drawPeople()

    requestAnimationFrame(animationHub);
};

function drawPeople() {
    let size = 10
    for (let i = 0; i < people.length; i++) {
        let person = people[i]
        ctx.clearRect(person.position[0], person.position[1], size, size)
        ctx.clearRect(person.position[0], person.position[1]+size, size, size)
        ctx.fillStyle = "rgb(241, 194, 125)";
        ctx.fillRect(person.position[0], person.position[1], size, size)
        ctx.fillStyle = "rgb(210, 43, 43)";
        ctx.fillRect(person.position[0], person.position[1]+size, size, size)
    }
}