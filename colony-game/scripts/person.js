var action // Current action

var people = []

var person = {
    occupation: "unemployed"
}

// new person{
//     occupation: "very employed"
// }

// SOLUTION 2 START
class person {
    constructor(job, age, name) {
        this.job = job
        this.age = age
        this.name = name;
    }
}

function newPerson() {
    // SOLUTION 1: HENRY ARRAY
    // people.push(["unemployed", 0, "bob"]) // Occupation, age, name

    // SOLUTION 2: CLASS OBJECTS
    var person = new person("bob", 7, "Henry")
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