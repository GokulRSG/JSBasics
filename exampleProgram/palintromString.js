let input = "madam";
if(reverseString(input) === input){
    console.log(`${input} is a palindrome.`);
}else{
    console.log(`${input} is not a palindrome.`);
}


function reverseString(str){
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

let input2 = "hello";
let reverStr = input2.split("").reverse().join("");
if(reverStr === input2){
    console.log(`${input2} is a palindrome.`);
}else{
    console.log(`${input2} is not a palindrome.`);
}


let reverseStr2 = input2.split("").reverse(); // ["o", "l", "l", "e", "h"]