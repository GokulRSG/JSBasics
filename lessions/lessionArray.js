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