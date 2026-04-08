var action // Current action

var people = []

var maleNames = [
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
    "Henry"
]

class person {
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
    console.log("NAMES: " + getRandomPersonName())
    var newPerson = new person("unemployed", 0, getRandomPersonName)
    people.push(newPerson)
    console.log(people)
}

function currentActivity() { // Run every frame
    if (action == "wander") {
        wander()
    }
}

function wander() {
    // Move around randomly
}

requestAnimationFrame(animationHub);

console.log(performance.now())