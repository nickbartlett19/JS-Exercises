function makeRandomArray(length) {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(getRandInt(10));
    }
    return arr;
}

function getRandInt(max) {
    return Math.floor(Math.random()*max);
}

function makeArrUnique(array) {
    
}

var myArray = makeRandomArray(10);
console.log(myArray);

var myArray = makeArrUnique(myArray);
console.log(myArray);
