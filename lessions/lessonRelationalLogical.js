// Relational or comparison operators

// == equal to
// === strict equal to (compares both value and type)
// != not equal to
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
console.log(5 == 5); // true
console.log(5 != 5); // false
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false
// == and ===
console.log(5 == "5"); // true (type coercion)
console.log(5 === "5"); // false (no type coercion)

// Logical operators
// && (AND) - true if both operands are true
// || (OR) - true if at least one operand is true
// ! (NOT) - negates the truth value of the operand
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(false || false); // false
console.log(!true); // false
console.log(!false); // true

//Example of using relational and logical operators together
const age = 25;
const hasID = true;
if (age >= 18 && hasID) {
    console.log("You can enter the club.");
} else {
    console.log("You cannot enter the club.");
}

// Other example
const score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// conditional (ternary) operator
const isAdult = age >= 18 ? "Yes" : "No";
console.log(`Is the person an adult? ${isAdult}`);
// conditional statement
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("End of the week!");
        break;
    default:
        console.log("It's a regular day.");
}
