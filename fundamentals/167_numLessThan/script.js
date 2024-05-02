function getRandArr(arrLength, min = 0, max = 100) {
    let randArr = [];

    for (let i = 0; i < arrLength; i++) {
        randArr.push(getRandInt(min,max));
    }

    return randArr;
}

function getRandInt(min, max) {
    return Math.floor(Math.random()*(max-min) + min)
}


let randArr = getRandArr(10);
// randArr.sort((a,b) => a-b);

let num = 50
let counter = 0;
randArr.reduce(
    (accumulator, currentValue) => (currentValue <= num ? counter++ : console.log("false")), 
    0,
);

console.log(counter);
console.log(randArr);

/* this is an odd solution because I thought I had to use Array.prototype.reduce(), clearly
Array.prototype.filter() is easier. */
