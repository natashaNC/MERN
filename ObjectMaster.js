const pokémon = Object.freeze([{
        "id": 1,
        "name": "Bulbasaur",
        "types": ["poison", "grass"]
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "types": ["fire"]
    },
    {
        "id": 9,
        "name": "Blastoise",
        "types": ["water"]
    },
    {
        "id": 12,
        "name": "Butterfree",
        "types": ["bug", "flying"]
    },
    {
        "id": 16,
        "name": "Pidgey",
        "types": ["normal", "flying"]
    },
    {
        "id": 23,
        "name": "Ekans",
        "types": ["poison"]
    },
    {
        "id": 24,
        "name": "Arbok",
        "types": ["poison"]
    },
    {
        "id": 25,
        "name": "Pikachu",
        "types": ["electric"]
    },
    {
        "id": 37,
        "name": "Vulpix",
        "types": ["fire"]
    },
    {
        "id": 52,
        "name": "Meowth",
        "types": ["normal"]
    },
    {
        "id": 63,
        "name": "Abra",
        "types": ["psychic"]
    },
    {
        "id": 67,
        "name": "Machamp",
        "types": ["fighting"]
    },
    {
        "id": 72,
        "name": "Tentacool",
        "types": ["water", "poison"]
    },
    {
        "id": 74,
        "name": "Geodude",
        "types": ["rock", "ground"]
    },
    {
        "id": 87,
        "name": "Dewgong",
        "types": ["water", "ice"]
    },
    {
        "id": 98,
        "name": "Krabby",
        "types": ["water"]
    },
    {
        "id": 115,
        "name": "Kangaskhan",
        "types": ["normal"]
    },
    {
        "id": 122,
        "name": "Mr. Mime",
        "types": ["psychic"]
    },
    {
        "id": 133,
        "name": "Eevee",
        "types": ["normal"]
    },
    {
        "id": 144,
        "name": "Articuno",
        "types": ["ice", "flying"]
    },
    {
        "id": 145,
        "name": "Zapdos",
        "types": ["electric", "flying"]
    },
    {
        "id": 146,
        "name": "Moltres",
        "types": ["fire", "flying"]
    },
    {
        "id": 148,
        "name": "Dragonair",
        "types": ["dragon"]
    }
]);

const pkmnIds_divBy3 = pokémon.filter(p => p.id % 3 === 0);
const pkmnTypes_fire = pokémon.filter(p => p.types.includes ("fire"));
const pkmnTypes_morethan1 = pokémon.filter(p => p.types.length > 1);
const pkmnNames = pokémon.map(p => p.name);
const pkmnNames_IdAbove99 = pokémon.filter(p => p.id > 99).map(n => n.name);
const pkmnNames_PoisonTypeOnly = pokémon.filter(p => p.types.length === 1 && p.types.includes("poison") ).map(n => n.name);
const pkmnTypes_secondTypeFlying = pokémon.filter(p => p.types[1] === "flying").map(n => n.types[0]);
const pkmnTypes_CountNormal = (pokémon.filter(p => p.types.includes("normal"))).length;


console.log(pkmnTypes_CountNormal);