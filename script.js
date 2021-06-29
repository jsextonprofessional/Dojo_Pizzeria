// var pizza = {
//     crustType: ["deep-dish", "hand-tossed"],
//     sauceType: ["traditional", "marinara"],
//     cheese: ["mozzarella", "feta"],
//     toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions"]
// };

// console.log(pizza);

// function pizzaOven(crustType, sauceType, cheese, toppings) {
//     var pizza = {};
//     pizza.crustType = crustType;
//     pizza.sauceType = sauceType;
//     pizza.cheese = cheese;
//     pizza.toppings = toppings;
//     return pizza;
// }

// var p1 = pizzaOven("deep-dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
// console.log(p1);

// var p2 = pizzaOven("hand-tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
// console.log(p2);

// var p3 = pizzaOven("hand-tossed", "ranch", ["mozzarella"], ["chicken", "bacon"]);
// console.log(p3);

// var p4 = pizzaOven("hand-tossed", ["tomato", "olive-oil"], ["fresh-mozz"], ["basil"]);
// console.log(p4)

var crustType = [
    "deep-dish",
    "hand-tossed",
    "thin",
    "g-free"
];
var sauceType = [
    "traditional",
    "marinara",
    "olive-oil",
    "ranch",
    "alfredo",
    "buffalo",
];
var cheese = [
    "mozzarella",
    "feta",
    "cheddar",
    "nut-cheeze",
]
var toppings = [
    "pepperoni",
    "sausage",
    "bacon",
    "chicken",
    "jalapeno",
    "mush"
]

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomTop(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomZa() {
    var za = {};
    za.crustType = randomTop(crustType);
    za.sauceType = randomTop(sauceType);
    za.cheese = [];
    za.toppings = [];
    for (var i = 0; i < randomRange(3, 0); i++) {
        za.cheese.push(randomTop(cheese));
    }
    for(var i = 0; i < randomRange(5, 0); i++) {
        za.toppings.push(randomTop(toppings));
    }
    return za;
}

console.log(randomZa());