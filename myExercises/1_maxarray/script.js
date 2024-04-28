// find the maximum element in an array of random numbers


function getRandArr(arrLength) {
    let randArr = [];

    for (let i = 0; i < arrLength; i++) {
        randArr.push(getRandInt(0,100));
    }

    return randArr;
}

function getRandInt(min, max) {
    return Math.floor(Math.random()*(max-min) + min)
}

function getMaxElem(arr) {
    let maxElem = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxElem) {
            maxElem = arr[i];
        }
        else {
            continue;
        }
    }

    return maxElem;
}

const myArr = getRandArr(20);
console.log(myArr);
console.log(getMaxElem(myArr));

