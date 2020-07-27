class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target.res -= this.power;
        console.log(`${this.name} has attacked ${target.name} reducing resilience by ${this.power}`)
    }
    UnitInfo() {
        console.log(`Unit Name: ${this.name}, Cost: ${this.cost}, Power: ${this.power}, Resilience: ${this.res}`)
    }

}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            var textTosearch = this.text;
            if (textTosearch.includes("increase") == true) {
                if (this.stat == "res") {
                    target.res += this.magnitude;
                    console.log(`"${this.name}" played on "${target.name}, adding ${this.magnitude} to resilience"`);
                } else if (this.stat == "power") {
                    target.power += this.magnitude;
                    console.log(`"${this.name}" played on "${target.name}, adding ${this.magnitude} to power"`);
                }
            } else {
                if (this.stat == "res") {
                    target.res -= this.magnitude;
                    console.log(`"${this.name}" played on "${target.name}, subtracting ${this.magnitude} from resilience"`);
                } else if (this.stat == "power") {
                    target.power -= this.magnitude;
                    console.log(`"${this.name}" played on "${target.name}, subtracting ${this.magnitude} from power"`);
                }
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
    EffectInfo() {
        console.log(`Effect Name: ${this.name}, Cost: ${this.cost}, Text: ${this.text}, Stat: ${this.stat}, Magnitude: ${this.magnitude}`)
    }
    // class Player extends Card {
    //     constructor(name) {
    //         super(name);
    //         this.name = name;
    //         this.points = 200;
    //     }
    //     Summon(unitName) {
    //         Player.points -= unitName.cost;
    //         console.log(`${Player.name} has summoned ${unitName.name}`)
    //     }

    //     PlayerInfo() {
    //         console.log(`Player Name: ${this.name}, Points: ${this.points}`)
    //     }
    // }
}


// const Player1 = new Player("Shaq", 200);
// Player1.PlayerInfo();

// const Player2 = new Player("Ida", 200);
// Player2.PlayerInfo();

const UnitRBN = new Unit("Red Belt Ninja", 3, 3, 4);
UnitRBN.UnitInfo();

const UnitBBN = new Unit("Black Belt Ninja", 4, 5, 4);
UnitBBN.UnitInfo();

const EffectHA = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
EffectHA.EffectInfo();

const EffectUPR = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", 2);
EffectUPR.EffectInfo();

const EffectPP = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
EffectPP.EffectInfo();

// Player1.Summon(UnitRBN);
EffectHA.play(UnitRBN);
// Player1.PlayerInfo();
UnitRBN.UnitInfo();

// Player2.Summon(UnitBBN);
EffectUPR.play(UnitBBN);
// Player2.PlayerInfo();
UnitBBN.UnitInfo();

EffectPP.play(UnitRBN);
UnitRBN.attack(UnitBBN);
UnitRBN.UnitInfo();
UnitBBN.UnitInfo();