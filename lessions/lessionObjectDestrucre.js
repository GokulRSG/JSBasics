// Object destructuring
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
const { name, age, city } = person;
console.log(name);
console.log(age);
console.log(city);

//example of large object destructuring
const user = {
    id: 1,
    username: "alice123",
    email: "alice@example.com",
    profile: {
        firstName: "Alice",
        lastName: "Smith"
    }
};
const { id, username, email } = user;
const { firstName, lastName } = user.profile;
console.log(id);
console.log(username);
console.log(email);
console.log(firstName);
console.log(lastName);

//Destructuring function parameters 
function displayUser({ id, username, email }) {
    console.log(`User: ${username} (${email}) - ID: ${id}`);
}

displayUser(user);

// Nested object destructuring in function parameters
function displayUserProfile({ profile: { firstName, lastName } }) {
    console.log(`User Profile: ${firstName} ${lastName}`);
}
displayUserProfile(user);

// Destructuring for of iteration
const users = [user];
for (const { id, username, email } of users) {
    console.log(`User: ${username} (${email}) - ID: ${id}`);
}

// Destructuring with default values
const { name: userName = "Unknown", age: userAge = 0, city: userCity = "Unknown" } = person;
console.log(userName);
console.log(userAge);
console.log(userCity);
//output:
//Alice
//30
//New York