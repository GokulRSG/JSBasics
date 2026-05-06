import Person from "./lessionClassMethods.js";
import { printName } from "./lessionClassMethods.js";
// To call a class, you need to create an instance of that class using the new keyword. This process is called instantiation. When you create an instance of a class, the constructor method is automatically called to initialize the object's properties. After creating an instance, you can call the methods defined in the class on that instance to perform actions or manipulate the object's data.
// Example of calling a class
const testCall = new Person("Bob", 25);
testCall.greet();
printName({ name: "testCall" });