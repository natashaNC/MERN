class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My name is ${this.name}`)
    }
    showStats() {
        console.log(`My name is ${this.name}, my health is ${this.health}, my speed is ${this.speed}, my strength is ${this.strength}`)
    }
    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();