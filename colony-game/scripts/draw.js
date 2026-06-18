function drawTiles(x, y, colour) {
    // var colour = colourTile(tiles[x][y], scale)
    
    if (typeof colour == "string") {
        // console.log(tiles[x][y][2])
        // console.log(colour)
        ctx.fillStyle = colour
        ctx.fillRect((x*scale)/1912, (y*scale)/948, (scale+0.5)/1912, (scale+0.5)/948);
    }
}

function randomizeRGB(red, green, blue, variance) {
    const r = (1+(Math.random()-0.5)/variance)*red
    const g = (1+(Math.random()-0.5)/variance)*green
    const b = (1+(Math.random()-0.5)/variance)*blue

    return ("rgb("+String(r)+","+String(g)+","+String(b)+")")
}

function colourTile(properties) {
    // console.log(properties)
    // console.log(properties[0])
    let light = properties[1]

    if (properties[0] == "grass") {
        return randomizeRGB(34*light, 139*light, 34*light, 6);
    }
    else if (properties[0] == "earth") {
        return randomizeRGB(120*light, 69*light, 19*light, 10)
    }
    else if (properties[0] == "rock") {
        return randomizeRGB(100*light, 100*light, 100*light, 10)
    }
    else if (properties[0] == "torch") {
        return "rgb(255, 165, 0)"
    }
    else {
        return false
    }
}

// function drawPeople() {
//     let size = 10
//     for (let i = 0; i < people.length; i++) {
//         let person = people[i]
//         ctx.clearRect(person.position[0], person.position[1], size, size)
//         ctx.clearRect(person.position[0], person.position[1]+size, size, size)
//         ctx.fillStyle = "rgb(241, 194, 125)";
//         ctx.fillRect(person.position[0], person.position[1], size, size)
//         ctx.fillStyle = "rgb(210, 43, 43)";
//         ctx.fillRect(person.position[0], person.position[1]+size, size, size)
//     }
// }