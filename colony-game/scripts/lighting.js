var ctx = canvas.getContext("2d");

for (let x = 0; x < tiles.length; x++) {
    for (let y = 0; y < tiles[x].length; y++) {

        console.log(tiles[x][y], x, y, tiles.length, tiles[x].length)
        var colour = colourTile(tiles[x][y], scale)

        if (colour != false) {
            ctx.fillStyle = colour
            ctx.fillRect(x*scale, y*scale, scale, scale);
        }
    }
}

function colourTile(properties, scale) {
    if (properties[0] == "grass") {
        return randomizeRGB(34, 139, 34, 6);
    }
    else if (properties[0] == "earth") {
        return randomizeRGB(120+properties[1]*scale/2, 69+properties[1]*scale/2, 19+properties[1]*scale/2, 10)
        // return randomizeRGB(120, 69, 19, 10)
    }
    // else if (properties[0] == "air") {
    //     return "rgb(0, 0, 0)";
    // }
    else if (properties[0] == "rock") {
        return "rgb(100, 100, 100"
    }
    else {
        return false
    }
    // return
}

function randomizeRGB(red, green, blue, variance) {
    const r = (1+(Math.random()-0.5)/variance)*red
    const g = (1+(Math.random()-0.5)/variance)*green
    const b = (1+(Math.random()-0.5)/variance)*blue

    return ("rgb("+String(r)+","+String(g)+","+String(b)+")")
}