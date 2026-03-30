const canvas = document.getElementById("canvas");

const scale = 8

var noise = new Noise(Math.random());
var tiles = []

// ctx = canvas.getContext("2d");

generate()

// 1D perlin noise

// function randomizeRGB(red, green, blue, variance) {
//     const r = (1+(Math.random()-0.5)/variance)*red
//     const g = (1+(Math.random()-0.5)/variance)*green
//     const b = (1+(Math.random()-0.5)/variance)*blue

//     return ("rgb("+String(r)+","+String(g)+","+String(b)+")")
// }

function generate() {
    width = window.innerWidth;
	height = window.innerHeight;

    canvas.width = width;
	canvas.height = height;

    var grassDepth = 40
    var hilliness = 2000 // Higher means less hilliness

    var mountainPos = Math.random()*width/scale
    var mountainWidth = (Math.random()+1)*(1/20)
    var mountainHeight = (Math.random()+0.1)*75

    for (let x = 0; x < width/scale; x++) {
        tiles.push([])

        for (let y = 0; y < height/scale; y++) {
            random = Math.random()
            tiles[x].push([])

            var tile
            var ground = (((noise.simplex2((x/(hilliness/scale))+100,0)+1)/2)*height/scale)/6+height/scale/8

            if (x == 50 && y == 100) {
                tile = ["torch", 1]
                lights.push(x+","+y+","+1)
            }
            else {
                if (mountainHeight*Math.E**(-1*(mountainWidth*(x-mountainPos))**2) > 1) {
                    ground += mountainHeight*Math.E**(-1*(mountainWidth*(x-mountainPos))**2)
                    if (height/scale-y < ground) {
                        tile = ["rock", 0]
                    }
                    else {
                        tile = ["air", 0]
                    }
                }
                else {
                    if (height/scale-y < ground) {
                        if (height/scale-y > ground-(grassDepth/scale)) {
                            if (((height/scale-y)-(ground-(grassDepth/scale)))*(approxOne(1.5)) > grassDepth/scale) {
                                tile = ["grass", 0]
                            }
                            else {
                                // tile = ["earth", (height/scale-y) - (ground-(grassDepth/scale))]
                                tile = ["earth", 0]
                            }
                        }
                        else {
                            // tile = ["earth", (height/scale-y) - (ground-(grassDepth/scale))]
                            tile = ["earth", 0]
                        }
                    }
                    else {
                        tile = ["air"]
                    }
                }
    
            }
            // var colour = colourTile(tile, scale)
            // if (colour != false) {
            //     ctx.fillStyle = colour
            //     ctx.fillRect(x*scale, y*scale, scale, scale);
            // }
            // ctx.fillRect(x*scale, y*scale, scale, scale);        

            tiles[x][y] = tile
            drawTiles(x, y)
            // console.log(tiles[x][y])
        }
    }
    for (let i = 0; i < lights.length; i++) {
        checkAroundLight(lights[i])
    }
    // checkAroundLight()
    // console.log(tiles[0].length)
}

// function colourTile(properties, scale) {
//     if (properties[0] == "grass") {
//         return randomizeRGB(34, 139, 34, 6);
//     }
//     else if (properties[0] == "earth") {
//         return randomizeRGB(120+properties[1]*scale/2, 69+properties[1]*scale/2, 19+properties[1]*scale/2, 10)
//         // return randomizeRGB(120, 69, 19, 10)
//     }
//     // else if (properties[0] == "air") {
//     //     return "rgb(0, 0, 0)";
//     // }
//     else if (properties[0] == "rock") {
//         return "rgb(100, 100, 100"
//     }
//     else {
//         return false
//     }
//     // return
// }

function approxOne(spread) {
    return (Math.random()+0.5)/((spread-1)/2*spread)
}

function getNoise(x) {
    return noise.simplex1(x)
}
