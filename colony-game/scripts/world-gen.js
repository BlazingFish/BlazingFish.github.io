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
    var scale = 2

    width = window.innerWidth;
	height = window.innerHeight;

    canvas.width = width;
	canvas.height = height;

    for (let x = 0; x < width/scale; x++) {
        tiles.push([])
        for (let y = 0; y < height/scale; y++) {
            random = Math.random()
            tiles[x].push([])

            var tile
            var ground = (((noise.simplex2(x/2000,0)+1)/2)*height/scale)/6+height/scale/8
            if (height/scale-y < ground) {
                if (height/scale-y > ground-20) {
                    if (Math.random()*(height/scale - y - ground) > -10) {
                        // console.log(Math.random()*(height/scale - y - ground) < -20)
                        tile = "grass"
                    }
                    else {
                        tile = "earth"
                    }
                }
                else {
                    tile = "earth"
                }
            }
            else {
                tile = "air"
            }

            if (tile == "grass") {
                ctx.fillStyle = randomizeRGB(34, 139, 34, 6);
                ctx.fillRect(x*scale, y*scale, scale, scale);
            }
            else if (tile == "earth") {
                ctx.fillStyle = randomizeRGB(120, 69, 19, 10)
                ctx.fillRect(x*scale, y*scale, scale, scale);
            }
            else if (tile == "air") {
                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillRect(x*scale, y*scale, scale, scale);
            }


            tiles[x][y] = tile
        }
    }

    // console.log(tiles)
}

function getNoise(x) {
    return noise.simplex1(x)
}