const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");

const width = window.innerWidth
const height = window.innerHeight

const cellWidth = 32
const cellHeight = 32

const scale = 16

canvas.width = width
canvas.height = height

var snake = [[8, 8]]
var snakeLength = 1

var direction = "d"

init()

function init() {
    newApple()
    requestAnimationFrame(animation)
}

var applePos
function newApple() {
    applePos = [(Math.floor(Math.random()*cellWidth)), (Math.floor(Math.random()*cellHeight))]

    console.log(applePos)
}

let frameCount = 0
function animation() {
    frameCount++
    if (frameCount >= 10) {
        moveSnake()
        frameCount = 0
    }
    requestAnimationFrame(animation)
}

function moveSnake() {
    var cell = snake[snake.length - 1];
    var headPos = [...cell]

    if (direction == "w") {
        headPos[1] -= 1
    }
    else if (direction == "a") {
        headPos[0] -= 1
    }
    else if (direction == "s") {
        headPos[1] += 1
    }
    else if (direction == "d") {
        headPos[0] += 1
    }

    if (headPos[0] == applePos[0] && headPos[1] == applePos[1]) {
        eat()
    }
    
    snake.push(headPos)

    if (snake.length > snakeLength) {
        snake.shift()
    }

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, cellWidth*scale, cellHeight*scale);
    ctx.fillStyle = "red"
    ctx.fillRect(applePos[0]*scale, applePos[1]*scale, scale, scale);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "green"
        ctx.fillRect(snake[i][0]*scale, snake[i][1]*scale, scale, scale)
    }

    for (let i = 0; i < snake.length; i++) {
        for (let j = 0; j < snake.length; j++) {
            if (snake[i][0] == snake[j][0] && snake[i][1] == snake[j][1] && i != j) {
                die()
            }
        }
        if (snake[i][0] > cellWidth || snake[i][1] > cellHeight) {
            die()
        }
    }
}

function eat() {
    snakeLength++
    newApple()
}

document.addEventListener('keypress', (event) => {
    if (event.key == "w" || event.key == "a" || event.key == "s" || event.key == "d") {
        direction = event.key
    }
});

function die() {
    alert("You died")
    restart()
}

function restart() {
    snake = [[8, 8]]
    snakeLength = 1
    newApple()
}