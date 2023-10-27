function bubbleSort(arr) {
    while (checkIfSorted(arr) === false) {
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                let storeElem = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = storeElem;
                // console.log("Swapped " + i + " with " + (i+1));
            }
        }
    }
    return arr;
}

function checkIfSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

function getMedianOfArr(arr) {
    let arrLen = arr.length;
    let median;
    console.log(arrLen);

    switch(0) {
        case arrLen % 2:
            console.log("arrLen is even")
            median = (arr[arrLen/2 - 1] + arr[arrLen/2])/2;
            break;
        default:
            median = arr[Math.floor(arrLen/2)];
            console.log("arrLen is odd");
    }
    
    return median;
}

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


const myArray = getRandArr(11);
console.log(myArray);

const sortedArray = bubbleSort(myArray);

console.log(sortedArray);

console.log(getMedianOfArr(sortedArray));