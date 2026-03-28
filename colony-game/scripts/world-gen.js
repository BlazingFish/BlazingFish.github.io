const canvas = document.getElementById("canvas");

var noise = new Noise(Math.random());

ctx = canvas.getContext("2d");

generate()

// 1D perlin noise

function randomizeRGB(red, green, blue, variance) {
    const r = (1+(Math.random()-0.5)/variance)*red
    const g = (1+(Math.random()-0.5)/variance)*green
    const b = (1+(Math.random()-0.5)/variance)*blue

    return ("rgb("+String(r)+","+String(g)+","+String(b)+")")
}

function generate() {
    width = window.innerWidth;
	height = window.innerHeight;

    canvas.width = width;
	canvas.height = height;

    var tiles = []
    var scale = 8

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

            if (mountainHeight*Math.E**(-1*(mountainWidth*(x-mountainPos))**2) > 1) {
                ground += mountainHeight*Math.E**(-1*(mountainWidth*(x-mountainPos))**2)
                if (height/scale-y < ground) {
                    tile = ["rock"]
                }
                else {
                    tile = ["air"]
                }
            }
            else {
                if (height/scale-y < ground) {
                // if (mountainPos > x) {
                    // tile = ["rock"]
                // }
                    if (height/scale-y > ground-(grassDepth/scale)) {
                        if (((height/scale-y)-(ground-(grassDepth/scale)))*(approxOne(1.5)) > grassDepth/scale) {
                            tile = ["grass"]
                        }
                        else {
                            // console.log((height/scale-y) - (ground-(grassDepth/scale)))
                            tile = ["earth", (height/scale-y) - (ground-(grassDepth/scale))]
                        }
                    }
                    else {
                        // console.log((height/scale-y) - (ground-(grassDepth/scale)))
                        tile = ["earth", (height/scale-y) - (ground-(grassDepth/scale))]
                    }
                }
                else {
                    tile = ["air"]
                }
            }

            colourTile(tile, scale)
            ctx.fillRect(x*scale, y*scale, scale, scale);            

            tiles[x][y] = tile
        }
    }
}

function colourTile(properties, scale) {
    if (properties[0] == "grass") {
        ctx.fillStyle = randomizeRGB(34, 139, 34, 6);
    }
    else if (properties[0] == "earth") {
        ctx.fillStyle = randomizeRGB(120+properties[1]*scale/2, 69+properties[1]*scale/2, 19+properties[1]*scale/2, 10)
    }
    else if (properties[0] == "air") {
        ctx.fillStyle = "rgb(0, 0, 0)";
    }
    else if (properties[0] == "rock") {
        ctx.fillStyle = "rgb(100, 100, 100"
    }
}

function approxOne(spread) {
    return (Math.random()+0.5)/((spread-1)/2*spread)
}

function getNoise(x) {
    return noise.simplex1(x)
}
