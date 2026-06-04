let input = "My programming is fun";
let words = input.split(" "); // ["My", "programming", "is", "fun"]

for(let i=0; i<words.length; i++){
    let word = words[i];
    let reversedWord = "";
    reversedWord = word.split("").reverse().join("");
    words[i] = reversedWord;
}
console.log(words.join(" ")); // "YM gnimmargorp si nuf"