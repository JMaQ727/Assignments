class Ninja {
    constructor(nameInput) {
        this.name = nameInput
        this.health = 100
        this.speed = 3
        this.strength = 3
    }
    sayname() {
        console.log(this.name)
    }
    showStats() {
        console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`)
    }
    drinkSake() {
        this.health += 10
    }
}

class Sensai extends Ninja {
    constructor(nameInput) {
        super(nameInput)
        this.wisdom = 10
    }
    speakWisdom() {
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}


const ninja1 = new Ninja("Steve");
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()
const ninja2 = new Sensai("Bob");
ninja2.speakWisdom()
ninja2.showStats()