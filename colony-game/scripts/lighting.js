// Use GPU if poorly optimized

var ctx = canvas.getContext("2d");
var width
var height

var lights = [] // x, y, intensity

function checkAroundLight(lights) {
    let lightsArray = lights.split(",")
    let x = parseInt(lightsArray[0])
    let y = parseInt(lightsArray[1])
    let intensity = parseFloat(lightsArray[2]) // Between 0 and 1

    let radius = (1 + intensity*2)/(1368/width)

    // console.log(intensity)

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

    // console.log(circle)

    for (let i = 0; i < circle.length; i++){
        // if (0 < x + circle[i][0] < tiles.length && 0 < y + circle[i][1] < tiles[i].length) {
        // console.log(tiles[i].length, y + circle[i][1])

        if (tiles[x + circle[i][0], y + circle[i][1]] != undefined) {
            // console.log(tiles[x + circle[i][0], y + circle[i][1]])
            tiles[x + circle[i][0]][y + circle[i][1]][1] = circle[i][2]
            drawTiles(x+circle[i][0], y+circle[i][1])
        }
        // tiles[x + circle[i][0]][y + circle[i][1]][1] = circle[i][2]
        // console.log(tiles[x + circle[i][0], y + circle[i][1]])

        // drawTiles(x+circle[i][0], y+circle[i][1])

        // }
        // tiles[x + circle[i][0]][y + circle[i][1]][1] = circle[i][2]
        // drawTiles(x+circle[i][0], y+circle[i][1])
        // console.log(tiles[x+circle[i][0]], tiles[y+circle[i][1]])
    }

    // console.log(radius)
    // console.log(x, y, intensity)
    // return 1

}