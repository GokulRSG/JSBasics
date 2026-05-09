// Different type of For Loop in JavaScript

// 1. Traditional For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 2. For...of Loop (for iterating over iterable objects like arrays)
const array = ['a', 'b', 'c'];
for (const element of array) {
    console.log(element);
}
// 3. For...in Loop (for iterating over the properties of an object)
const obj = { name: 'Alice', age: 30, city: 'New York' };
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
    }
}
// 4. ForEach Loop (for iterating over arrays)
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((element) => {
    console.log(element);
});

// ForEach with index
numbers.forEach((element, index) => {
    console.log(`Index: ${index}, Element: ${element}`);
});