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

const ninja1 = new Ninja("Steve");
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()