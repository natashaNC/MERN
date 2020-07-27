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
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health) {
        super(name, 200, 0, 0);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        this.drinkSake();
        var random_num = Math.floor(Math.random() * this.wisdom);
        var wiseSayings = [
            "Programmers prefer dark mode beause light attracts bugs.",
            "Programmers eat just a byte for breakfast.",
            "A group of programmers is called an argument.",
            "A programmer’s favorite game is finding out what they broke this time.",
            "What one programmer can do in one month, two programmers can do in two months.",
            "Java Programmers have to wear glasses, because they don’t C#.",
            "Programmers hate roman numerals, can you zero in on why?",
            "A programmer was accused of bad coding, he refused to comment.",
            "A programmer wears whatever is in the dress code.",
            "The programmer got stuck in the shower because his shampoo said 'lather, rinse, repeat.'",
            "The programmer quit her job because she didn't get arrays."
            //develop a function to utilize a web scraper to add more jokes if there are less jokes in the array than the amount of wisdom the Sensei has 
        ];
        console.log(wiseSayings[random_num])
    }
}

// const ninja1 = new Ninja("Hyabusa", 100);
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"