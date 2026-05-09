// different between typescriopt and javascript
// 1. typescript is a superset of javascript, which means that any valid javascript code is also valid typescript code.
// 2. typescript adds static typing to javascript, which means that you can specify the type of a variable, function parameter, or return value.
// 3. typescript has a type inference system, which means that it can automatically infer the type of a variable based on its value.
// 4. typescript has a powerful type system that includes interfaces, classes, and generics.
// 5. typescript has a rich set of tools and libraries that make it easier to develop large-scale applications.
// Example of typescript code
let message: string = "Hello, World!";
console.log(message);

// Example of a function with type annotations
function add1(a: number, b: number): number {
    return a + b;
}
console.log(add1(5, 10));

// Example of an interface
interface Person {
    name: string;
    age: number;
}
let john: Person = {
    name: "John",
    age: 30
};
console.log(john);

// Example of a class
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
let dog = new Animal("Dog");
console.log(dog);

// Example of a generic function
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("Hello, Generics!"));
console.log(identity<number>(42));

// Example of type inference
let inferredString = "This is a string";
console.log(inferredString);// output: This is a string
let inferredNumber = 123;
console.log(inferredNumber);// output: 123
