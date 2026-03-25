const canvas = document.getElementById("canvas");

var noise = new Noise(Math.random());

ctx = canvas.getContext("2d");

generate()

// 1D perlin noise

function generate() {
    var tiles = []

    width = window.innerWidth;
	height = window.innerHeight;

    canvas.width = width;
	canvas.height = height;

    for (let x = 0; x < width; x++) {
        tiles.push([])
        for (let y = 0; y < height; y++) {
            random = Math.random()
            tiles[x].push([])

            var tile = false
            if (
                height - y < (((noise.simplex2(x/8000,0)+1)/2)*height)/4+height/8
            ) {
                tile = true
            }

            if (tile == true) {
                ctx.fillRect(x, y, 1, 1);
                tiles[x][y] = true
            }
            else {
                tiles[x][y] = false
            }
        }
    }

    console.log(tiles)
}

function getNoise(x) {
    return noise.simplex1(x)
}