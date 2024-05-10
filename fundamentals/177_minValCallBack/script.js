function getRandArr(arrLength) {
    let randArr = [];

    for (let i = 0; i < arrLength; i++) {
        randArr.push(getRandInt(-100,100));
    }

    return randArr;
}
function getRandInt(min, max) {
    return Math.floor(Math.random()*(max-min) + min)
}

function getMinVal(arr, callback) {
    let minVal = callback(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        if (callback(arr[i]) < minVal) {
            minVal = callback(arr[i]);
        }
    }

    return minVal;
}

let arr = getRandArr(5);

console.log(arr);
console.log(getMinVal(arr, (x) => Math.abs(x)));