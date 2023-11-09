function getRandArr(arrLength, min, max) {
    let randArr = [];

    for (let i = 0; i < arrLength; i++) {
        randArr.push(getRandInt(min,max));
    }

    return randArr;
}

function getRandInt(min, max) {
    return Math.floor(Math.random()*(max-min) + min)
}

function moveToEndOfArr(arr, offset) {
    let seg1 = arr.slice(0, offset);
    let seg2 = arr.slice(offset);

    return seg2.concat(seg1);
}


const myArr = getRandArr(10, 0, 10);

console.log(myArr);
const newArr = moveToEndOfArr(myArr, 5);
console.log(newArr);
console.log(myArr);
