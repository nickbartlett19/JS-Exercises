// Write a JavaScript program to create an array out of the arrays 
// by creating each possible pair from the arrays.

// in my words: with two arrays A and B populated by natural numbers,
// make a new array C of the all possible ordered pairs (a,b) where a in A,
// b in b

// ToDo: improve from O(N^2);


function makeRandomArray(length) {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(getRandInt(100));
    }
    return arr;
}

function getRandInt(max) {
    return Math.floor(Math.random()*max);
}

function combineArr(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            newArr.push("(" + arr1[i] + ", " + arr2[j] + ")");
        }
    }
    return newArr;
}

const arrA = makeRandomArray(3);
const arrB = makeRandomArray(4);
const arrC = combineArr(arrA, arrB);
console.log("start", arrA, arrB);
console.log("combining...")
console.log("finish", arrC);
