//javascript default functions
//In JavaScript, there are several built-in functions that are available by default. These functions can be used without needing to define them yourself. Some of the most commonly used default functions include:
// 1. console.log() - Outputs a message to the console
// 2. alert() - Displays an alert dialog with a specified message
// 3. prompt() - Displays a dialog that prompts the user for input
// 4. parseInt() - Parses a string and returns an integer
// 5. parseFloat() - Parses a string and returns a floating-point number
// 6. isNaN() - Determines whether a value is NaN (Not-a-Number)
// 7. typeof - Returns a string indicating the type of a variable
// 8. Array.isArray() - Determines whether a value is an array
// 9. JSON.parse() - Parses a JSON string and returns a JavaScript object
// 10. JSON.stringify() - Converts a JavaScript object to a JSON string
//These functions are part of the JavaScript language and can be used in any JavaScript code without needing to import or define them. They provide essential functionality for working with data, handling user input, and performing various operations in JavaScript.
// Math functions are also built-in functions in JavaScript that provide mathematical operations and constants. Some commonly used Math functions include:
// 1. Math.abs() - Returns the absolute value of a number
// 2. Math.ceil() - Rounds a number up to the nearest integer
// 3. Math.floor() - Rounds a number down to the nearest integer
// 4. Math.round() - Rounds a number to the nearest integer
// 5. Math.max() - Returns the largest of zero or more numbers
// 6. Math.min() - Returns the smallest of zero or more numbers
// 7. Math.pow() - Returns the base to the exponent power
// 8. Math.sqrt() - Returns the square root of a number
// 9. Math.random() - Returns a random number between 0 (inclusive) and 1 (exclusive)
// 10. Math.PI - The mathematical constant π (pi)
//These Math functions are part of the JavaScript language and can be used to perform various mathematical operations in your code. They provide a convenient way to handle common mathematical tasks without needing to implement them yourself.

//example of using some of the default functions in JavaScript
console.log("Hello, World!");
alert("This is an alert message.");
const userInput = prompt("Please enter your name:");
console.log(`Hello, ${userInput}!`);
const num1 = parseInt("42");
const num2 = parseFloat("3.14");
console.log(num1);
console.log(num2);
console.log(isNaN("abc"));
console.log(typeof userInput);
console.log(Array.isArray([1, 2, 3]));
const jsonString = '{"name": "Alice", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
const jsonStringified = JSON.stringify(jsonObject);
console.log(jsonStringified);
console.log(Math.sqrt(16));
console.log(Math.random());
console.log(Math.abs(-5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.round(4.5));
console.log(Math.max(1, 5, 3));
console.log(Math.min(1, 5, 3));
console.log(Math.pow(2, 3));
console.log(Math.PI);
