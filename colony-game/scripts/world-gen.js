const canvas = document.getElementById("canvas");

const scale = 8
const xRes = Math.ceil(1912/scale)
const yRes = Math.ceil(948/scale)

var noise = new Noise(Math.random());
var tiles = []

generate()

// 1D perlin noise <- idk what this comment is doing here, but it's staying.

function generate() {
    // ctx.save()
    // ctx.scale(1912, 948)

    var grassDepth = 40
    var hilliness = 2000 // Higher means less hilliness

    var mountainPos = Math.random()*width/scale
    var mountainWidth = (Math.random()+1)*(1/20)
    var mountainHeight = (Math.random()+0.1)*75

    for (let x = 0; x < xRes; x++) {
        tiles.push([])

        for (let y = 0; y < yRes; y++) {
            random = Math.random()
            tiles[x].push([])

            var tile
            var ground = (((noise.simplex2((x/(hilliness/scale))+100,0)+1)/2)*yRes)/6+yRes/8

            // if (x == 50 && y == 100) {
            //     tile = ["torch", 1]
            //     lights.push(x+","+y+","+1)
            // }
            
            if (mountainHeight*Math.E**(-1*(mountainWidth*(x-mountainPos))**2) > 1) {
                ground += mountainHeight*Math.E**(-1*(mountainWidth*(x-mountainPos))**2)
                if (yRes-y < ground) {
                    tile = ["rock", 0]
                }
                else if (yRes-y < ground + 1) {
                    tile = ["sky", 1]
                    lights.push([x, y, 1])
                }
                else {
                    tile = ["air", 0]
                }
            }
            else {
                if (yRes-y < ground) {
                    if (yRes-y > ground-(grassDepth/scale)) {
                        if (((yRes-y)-(ground-(grassDepth/scale)))*(approxOne(1.5)) > grassDepth/scale) {
                            tile = ["grass", 0]
                        }
                        else {
                            tile = ["earth", 0]
                        }
                    }
                    else {
                        tile = ["earth", 0]
                    }
                }
                else if (yRes-y < ground + 1) {
                    tile = ["sky", 1]
                    lights.push([x, y, 1])
                }
                else {
                    tile = ["air", 0]
                }
            }

            tiles[x][y] = tile
            drawTiles(x, y, width, height)
        }
    }
    // ctx.restore()
    for (let i = 0; i < lights.length; i++) {
        checkAroundLight(lights[i])
    }
    // ctx.restore()
}


function approxOne(spread) {
    return (Math.random()+0.5)/((spread-1)/2*spread)
}

function getNoise(x) {
    return noise.simplex1(x)
}
