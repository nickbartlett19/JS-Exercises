// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range. 

function numInRange(num1, num2) {
    if (num1 >= 50 && num2 <= 99) {return true}
    if (num2 >= 50 && num2 <= 99) {return true}
    else {return false}
}

let num1 = Math.floor(Math.random()*(100));
let num2 = Math.floor(Math.random()*(100));

console.log(num1, num2);

console.log(numInRange(num1,num2));