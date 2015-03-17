function calcSupply(age, maxAge, food, foodPerDay) {
    var amount = (maxAge - age) * 365 * foodPerDay;
    console.log(amount + " kg of " + food + " would be enough until I am " + maxAge + " years old.");
}

var age = prompt("Enter your age");
var maxAge = prompt("Enter your maximum age");
var food = prompt("Enter your favourite food");
var foodPerDay = prompt("Enter the everyday amount of food");
calcSupply(age, maxAge, food, foodPerDay);