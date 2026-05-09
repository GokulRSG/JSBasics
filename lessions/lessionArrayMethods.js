const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers);
console.log(...numbers);

console.log(numbers.map(num=>num));

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
numbers.forEach(element => {
    console.log(element);
});

//array destructuring
const [first, second, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);

//Array Transformations
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// reverse the array
const reversedNumbers = [...numbers].reverse();
console.log(reversedNumbers);
// slice the array (returns a new array with the selected elements)
const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers);

// splice the array (modifies the original array by adding/removing elements)
const splicedNumbers = [...numbers];
splicedNumbers.splice(2, 1, 99);
console.log(splicedNumbers);

// sort the array (sorts the array in place)
const sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log(sortedNumbers);

const arr = ['c', 'a', 'z', 'b'];
const result = arr.sort();
console.log(result);

// example how to use a custom comparison function can be used to sort an array of objects.
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
const sortedPeople = [...people].sort((a, b) => b.age - a.age);
console.log(sortedPeople);  

