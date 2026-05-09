//Callback functions are functions passed as arguments to other functions. The callback function may then be invoked to trigger a subsequent action. Often, callbacks are used to handle the results of work done, or handle an action when an event occurs. Callback functions can be used in synchronous and asynchronous programming.
//Example of a callback function in JavaScript:
function fetchData(callback) {
    setTimeout(() => {
        const data = "Some fetched data";
        callback(data);
    }, 1000);
}

function processData(data) {
    console.log("Processing data: " + data);
}

fetchData(processData); //output after 1 second: "Processing data: Some fetched data"
//In this example, fetchData is a function that simulates fetching data asynchronously using setTimeout. It takes a callback function as an argument, which is called with the fetched data once it is available. The processData function is passed as the callback to fetchData, and it will be executed once the data is fetched, logging the processed data to the console.

//2. Another example of a callback function
const sideLength = 5;

// Caller function takes a callback function
function applySideLength(callback) {
  return callback(sideLength);
}

// Callback must expect the possible argument from the calling function
function areaOfSquare(side) {
  return side * side;
}

applySideLength(areaOfSquare); // Returns 25, which is the area of the square with side length 5
