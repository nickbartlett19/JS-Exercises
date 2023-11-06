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

function getKthGreatestElem(arr, k) {
    if (checkIfSorted(arr) === false) {
        console.log("ERROR: arr not sorted");
        return;
    }

    if (k >= arr.length || k <= 0) {
        console.log("ERROR: invalid k value");
        return;
    }

    return arr[arr.length - k]
}


var myArr = getRandArr(10);
console.log("myArr " + myArr); 
bubbleSort(myArr);
console.log("myArr " + myArr); 
const kthGreatestElem = getKthGreatestElem(myArr, 4);
console.log(kthGreatestElem);
