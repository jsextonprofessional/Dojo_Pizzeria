var pizza = {
    crustType: ["deep dish", "hand tossed"],
    sauceType: ["traditional", "marinara"],
    cheese: ["mozzarella", "feta"],
    toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions"]
};

console.log(pizza);

function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}