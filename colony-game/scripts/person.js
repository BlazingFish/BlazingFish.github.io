var action // Current action

var people = []

// var personGrid

// for (let x = 0; x < xRes*2; x++) {
//     personGrid.push([])
//     for (let y = 0; y < yRes*2; y++) {
//         personGrid[x].push([])
//     }
// }

var names = [
    "Zimfafawe",
    "Bob",
    "Chuck",
    "David",
    "Donald",
    "Edith",
    "Zyn",
    "Muhammad",
    "Sam",
    "Rhys",
    "Henry",
    "Jacob",
    "Zac",
    "Andrew",
    "Liv",
    "Anna",
    "Victoria",
    "Isabelle",
    "Sabine",
    "Laura",
    "Charlie",
    "Lucy",
    "Andrea",
    "Peter",
    "Jack",
    "Harry",
    "Ben",
    "Jane",
    "Nick",
    "Penny",
    "Kym",
    "Kim",
    "Alex",
    "Steve",
    "Tom",
    "Chris",
    "Ian",
    "Claire",
    "Zara",
    "Lily",
    "Willow",
    "Ella",
    "Margaret"
]

class personClass {
    constructor(job, age, name) {
        this.job = job
        this.age = age
        this.name = name;
    }
}

window.addEventListener("keydown", function(event) {
    if (event.key == "p") {
        createNewPerson()
    }
})

function getRandomPersonName() {
    return names[Math.round(Math.random()*(names.length-1))]
}

function createNewPerson() {
    var newPerson = new personClass("unemployed", 0, getRandomPersonName())
    people.push(newPerson)
}

function currentActivity() { // Runs every frame
    for (let i = 0; i < people.length; i++) {
        if (action == "wander") {
            wander(i)
        }
    }
}

function wander(index) { // Move around randomly
    let person = people[index]

    
}

// requestAnimationFrame(animationHub);

// console.log(performance.now())