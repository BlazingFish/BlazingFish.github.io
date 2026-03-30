// Use GPU if poorly optimized

var ctx = canvas.getContext("2d");
var lights = [] // x, y, intensity

function checkAroundLight(lights) {
    let lightsArray = lights.split(",")
    let x = parseInt(lightsArray[0])
    let y = parseInt(lightsArray[1])
    let intensity = parseFloat(lightsArray[2])
    console.log(x, y, intensity)
    return 0

}