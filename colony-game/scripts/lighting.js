// Use GPU if poorly optimized

var ctx = canvas.getContext("2d");
var lights = [] // x, y, intensity

function checkAroundLight(lights) {
    let lightsArray = lights.split(",")
    let x = parseInt(lightsArray[0])
    let y = parseInt(lightsArray[1])
    let intensity = parseFloat(lightsArray[2])

    let radius = 50**(intensity)

    var quad1 = []

    for (let yQuad = 0; yQuad <= radius; yQuad++) {
        // console.log(radius)
        let xQuad = Math.ceil((radius**2-yQuad**2)**(1/2))
        console.log(xQuad, yQuad)
        quad1.push([xQuad, yQuad])
    }

    for (let i = 0; i < quad1.length; i++){
        // console.log("SHIT" + parseFloat(x + quad1[i][0]))

        tiles[x + quad1[i][0]][y + quad1[i][1]] = ["torch", 1]
        drawTiles([tiles[x+quad1[i][0]], tiles[x+quad1[i][0]]])
    }

    // console.log(radius)
    // console.log(x, y, intensity)
    return 1

}