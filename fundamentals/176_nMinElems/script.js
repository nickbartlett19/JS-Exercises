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

function nMinElems(arr, n) {
    if (n > arr.length) {
        throw new Error('nMinElems(): n is larger than the array');
    }
    let sortedArr = [...arr];
    sortedArr.sort((a,b) => a-b);
    let nMinArr = sortedArr.slice(0,n);
    return nMinArr;
}

let arr = getRandArr(12);
console.log(arr);
console.log(nMinElems(arr,3));
