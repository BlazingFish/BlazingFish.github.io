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
    var tiles = []
    var scale = 8

    var grassDepth = 40
    var hilliness = 2000 // Higher means less hilliness

    width = window.innerWidth;
	height = window.innerHeight;

    canvas.width = width;
	canvas.height = height;


    generateMountain(width/scale/2, 1)

    for (let x = 0; x < width/scale; x++) {
        tiles.push([])
        if (x == Math.floor(height/scale/2)) {
            mountainStart = x
        }
        console.log(mountainStart)

        for (let y = 0; y < height/scale; y++) {
            random = Math.random()
            tiles[x].push([])

            var tile
            var ground = (((noise.simplex2((x/(hilliness/scale))+100,0)+1)/2)*height/scale)/6+height/scale/8

            if (height/scale-y < ground) {
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

            if (tile[0] == "grass") {
                ctx.fillStyle = randomizeRGB(34, 139, 34, 6);
                ctx.fillRect(x*scale, y*scale, scale, scale);
            }
            else if (tile[0] == "earth") {
                ctx.fillStyle = randomizeRGB(120+tile[1]*scale/2, 69+tile[1]*scale/2, 19+tile[1]*scale/2, 10)
                ctx.fillRect(x*scale, y*scale, scale, scale);
            }
            else if (tile[0] == "air") {
                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillRect(x*scale, y*scale, scale, scale);
            }


            tiles[x][y] = tile
        }
    }
}

function approxOne(spread) {
    return (Math.random()+0.5)/((spread-1)/2*spread)
}

function getNoise(x) {
    return noise.simplex1(x)
}

function generateMountain(start, height) {
    var start
    var end
    
    return start
}

function polynomial (height, x) {
    return height*x
}