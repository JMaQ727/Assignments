// JS Objects master
// Reference data types: arrays, objects
// Primitive types: strings, numbers, booleans, undefined, and null

var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"],
};

var pokémon = [
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
    { id: 5, name: "Charmeleon", types: ["fire"] },
    { id: 9, name: "Blastoise", types: ["water"] },
    { id: 12, name: "Butterfree", types: ["bug", "flying"] },
    { id: 16, name: "Pidgey", types: ["normal", "flying"] },
    { id: 23, name: "Ekans", types: ["poison"] },
    { id: 24, name: "Arbok", types: ["poison"] },
    { id: 25, name: "Pikachu", types: ["electric"] },
    { id: 37, name: "Vulpix", types: ["fire"] },
    { id: 52, name: "Meowth", types: ["normal"] },
    { id: 63, name: "Abra", types: ["psychic"] },
    { id: 67, name: "Machamp", types: ["fighting"] },
    { id: 72, name: "Tentacool", types: ["water", "poison"] },
    { id: 74, name: "Geodude", types: ["rock", "ground"] },
    { id: 87, name: "Dewgong", types: ["water", "ice"] },
    { id: 98, name: "Krabby", types: ["water"] },
    { id: 115, name: "Kangaskhan", types: ["normal"] },
    { id: 122, name: "Mr. Mime", types: ["psychic"] },
    { id: 133, name: "Eevee", types: ["normal"] },
    { id: 144, name: "Articuno", types: ["ice", "flying"] },
    { id: 145, name: "Zapdos", types: ["electric", "flying"] },
    { id: 146, name: "Moltres", types: ["fire", "flying"] },
    { id: 148, name: "Dragonair", types: ["dragon"] },
];

// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].id > 99) {
//         console.log(pokémon[i].name);
//     }
// }

// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].id % 3 == 0) {
//         console.log(pokémon[i].name);
//     }
// }

// console.log the pokémon objects that have more than one type

// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].types.length > 1) {
//         console.log(pokémon[i].types);
//     }
// }

// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].types == "poison") {
//         console.log(pokémon[i].name);
//     }
// }

// console.log the first type of all the pokémon whose second type is "flying"

// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].types[1] == "flying") {
//         console.log(pokémon[i].name);
//     }
// }

// console.log the reverse of the names of the pokémon whose only type is "poison"

// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].types == "poison") {
//         var temp = pokémon[i].name
//         var pname = temp.split('')
//         var pkname = pname.reverse()
//         var final = pkname.join('')
//         console.log(final)
//     }
// }

for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types == "poison") {
        var temp = pokémon[i].name
        temp = temp.split('')
        temp = temp.reverse()
        temp = temp.join('')
        console.log(temp)
    }
}

// split function: ekans > [e,k,a,n,s]
// reverse function: [e,k,a,n,s] > [s,n,a,k,e]
// join function: [s,n,a,k,e] > snake