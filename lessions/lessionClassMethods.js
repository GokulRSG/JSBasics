// Methods are functions that are defined inside a class and are used to perform actions on the objects created from that class. In the example above, greet() and celebrateBirthday() are methods of the Person class. They can be called on any instance of the Person class, such as alice in this case.
export function printName(person) {
    console.log(`The person's name is ${person.name}`);
}
// Classes are blueprints for creating objects. They encapsulate data and functions that operate on that data. In the example above, the Person class has a constructor that initializes the name and age properties, and it has two methods: greet() and celebrateBirthday(). The constructor is a special method that is called when a new instance of the class is created, allowing us to set up the initial state of the object.
export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    celebrateBirthday() {
        this.age++;
        console.log(`${this.name} is now ${this.age}`);
    }
}



