// var action // Current action

var people = []

var personSpawn = [width/2, height/2] // Where the people spawn

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
    constructor(job, age, name, position, action) {
        this.job = job;
        this.age = age
        this.name = name;
        this.position = position;
        this.action = action
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
    // Job, age, name, position
    var newPerson = new personClass("unemployed", 0, getRandomPersonName(), personSpawn, "wander")
    people.push(newPerson)
}

function currentActivity() { // Runs every frame
    // console.log("ewgiryu")
    for (let i = 0; i < people.length; i++) {
        let person = people[i]
        if (person.action == "wander") {
            wander(person)
        }
    }
}

function wander(person) { // Move around randomly
    // console.log("ewgiryu")

    person.position[0] += 1
}

// requestAnimationFrame(animationHub);

// console.log(performance.now())