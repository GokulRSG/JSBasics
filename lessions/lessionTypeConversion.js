//Explain type conversion in JavaScript and provide examples of implicit and explicit type conversion.
//Type conversion in JavaScript refers to the process of converting a value from one data type to another. This can happen either implicitly (automatically by JavaScript) or explicitly (manually by the programmer).

//Implicit Type Conversion (Type Coercion):
//In implicit type conversion, JavaScript automatically converts values to the expected type based on the context. For example:
let num = 5;
let str = "The number is " + num;

console.log(str); // Output: "The number is 5"

//In this example, the number 5 is implicitly converted to a string when concatenated with the string "The number is ".
//Explicit Type Conversion:
//In explicit type conversion, the programmer manually converts a value to a specific type using built-in functions or methods. For example:
let numStr = "123";
let numValue = Number(numStr);
console.log(numValue); // Output: 123
//In this example, the string "123" is explicitly converted to a number using the Number() function.

//Another example of explicit type conversion is using the String() function to convert a number to a string:
let num2 = 456;
let str2 = String(num2);
console.log(str2); // Output: "456"
let arrayString = String([42, null, true, 'abc']);
console.log(arrayString); // Output: "42,null,true,abc"


//In this example, the number 456 is explicitly converted to a string using the String() function.

//Overall, type conversion is a fundamental aspect of JavaScript that allows for flexibility in handling different data types, but it's important to be aware of when and how it occurs to avoid unexpected results.

//boolean conversion is another type of type conversion in JavaScript. It can be implicit or explicit as well. For example:
let value1 = 0;
let value2 = "Hello";
let value3 = null;
console.log(Boolean(value1)); // Output: false (0 is falsy)
console.log(Boolean(value2)); // Output: true (non-empty string is truthy)
console.log(Boolean(value3)); // Output: false (null is falsy)
