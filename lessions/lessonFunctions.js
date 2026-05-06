// JS Functions
function add(a, b) {
    return a + b;
}

// Type of function
console.log(typeof add); // function
// Function expression
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(5, 3)); // 2
// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // 15
// Higher-order function
function operate(a, b, operation) {
    return operation(a, b);
}
console.log(operate(5, 3, add)); // 8
console.log(operate(5, 3, subtract)); // 2
console.log(operate(5, 3, multiply)); // 15
// Function with default parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Hello, Guest!
console.log(greet("Alice"));
// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15 
// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This is an IIFE!");
})();

// Recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120


// Anonymous function
setTimeout(function() {
    console.log("This is an anonymous function!");
}, 1000);

// other example of anonymous function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(num) {
    return num * num;
});
console.log(squaredNumbers); // [1, 4, 9, 16, 25]