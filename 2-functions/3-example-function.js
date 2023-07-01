// bad
function name(dogName, ownerName) {
    return `${dogName} ${ownerName}`;
}

// good
function getName(dogName, ownerName) {
    return `${dogName} ${ownerName}`;
}

// bad
function calculate(a, b) {
    return a + b;
}

// good
function calculateSum(number1, number2) {
    return number1 + number2;
}

// bad
function run(x, y) {
    return x * y;
}

// good
function multiplyNumbers(factor1, factor2) {
    return factor1 * factor2;
}

// bad
function display(z) {
    console.log(z);
}

// good
function logToConsole(message) {
    console.log(message);
}

// bad
function validate(u, v) {
    return u !== v;
}

// good
function checkInequality(value1, value2) {
    return value1 !== value2;
}