// MRF functions
// M - Map
// R - Reduce
// F - Filter
// Map transforms every item in an array and returns a new array.
// Reduce combines all items into a single value.
// Filter selects only the items that match a condition.
// Example below shows:
//   map: square each number
//   reduce: add all numbers together
//   filter: keep only even numbers
// Map example
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared);
// Reduce example
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// Filter example
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Chaining MRF functions
// Example: Filter even numbers, square them, and then sum the squares
// step 1: filter even numbers
// step 2: map to squares
// step 3: reduce to sum
const chainedResult = numbers
    .filter(num => num % 2 === 0) // Filter even numbers
    .map(num => num * num) // Square the filtered numbers
    .reduce((acc, num) => acc + num, 0);
console.log(chainedResult);

// Using MRF with objects
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
// Map example: Get an array of names
const names = people.map(person => person.name);
console.log(names);
// Reduce example: Get the total age
//acc is the accumulator that holds the running total, and person is the current item being processed in the array. The initial value of acc is set to 0.
// 0 is the initial value for the accumulator, meaning that before processing any items in the array, the total age starts at 0. As the reduce function iterates through each person in the people array, it adds their age to the accumulator (acc), resulting in the total age of all people by the end of the reduction process.
const totalAge = people.reduce((acc, person) => acc + person.age, 0);
console.log(totalAge);
// Filter example: Get an array of adults
const adults = people.filter(person => person.age >= 30);
console.log(adults);
// complex example: Get the average age of adults
// step 1: filter adults
// step 2: reduce to sum of ages and count of adults
const averageAdultAge = people
    .filter(person => person.age >= 30) // Filter adults
    .reduce((acc, person, index, array) => acc + person.age / array.length, 0);
console.log(averageAdultAge);// 32.5
