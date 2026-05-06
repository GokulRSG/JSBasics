console.log("Hello World!");
// Concatenation and interpolation
var name = "Alice";
var greeting = "Hello, " + name + "!"; // Concatenation
var greeting2 = `Hello, ${name}!`; // Interpolation
console.log(greeting);
console.log(greeting2);
// Data types
var age = 30; // Number
var isStudent = false; // Boolean
var hobbies = ["reading", "coding", "hiking"]; //Array
var nullValue = null; // Null
var undefinedValue; // Undefined
var contactInfo = { email: "test@example.com", phone: "123-456-7890" }; // Object
var person = { name: "Alice", age: 30, hobbies: hobbies, contact: contactInfo }; // Object
console.log(age);
console.log(isStudent);
console.log(hobbies);
console.log(person.name);
console.log(person["age"]);
console.log(person.hobbies);
console.log(person.contact.email);
console.log(person.contact);
// Functions
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));