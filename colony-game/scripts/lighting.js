// Use GPU if poorly optimized

var ctx = canvas.getContext("2d");
var width
var height

var lights = [] // x, y, intensity

var width = window.innerWidth;
var height = window.innerHeight;

canvas.width = width;
canvas.height = height;


function checkAroundLight(parseLights) {
    let x = parseLights[0]
    let y = parseLights[1]
    let intensity = parseLights[2] // Between 0 and 1

    let radius = Math.round(16 + intensity*6)

    var circle = [] // x, y, brightness

    for (let xCoord = -radius; xCoord <= radius; xCoord++) {
        if (0 < x + xCoord < tiles.length) {
            for (let yCoord = -radius; yCoord <= radius; yCoord++) {
                if (0 < y + yCoord < tiles[x].length) {
                    let distance = ((xCoord**2)+(yCoord**2))**(1/2)
                    if (distance <= radius) {
                        circle.push([xCoord, yCoord, 1-(distance/radius)**2])
                    }
                }
            }
        }
    }

    for (let i = 0; i < circle.length; i++){
        let circleX = x + circle[i][0]
        let circleY = y + circle[i][1]

        if (0 <= circleX && 0 <= circleY && circleX < xRes && circleY < yRes) {
            if (tiles[circleX][circleY][1] < circle[i][2]) {
                tiles[circleX][circleY][1] = circle[i][2]
                drawTiles(x+circle[i][0], y+circle[i][1])
            }
        }
    }
}