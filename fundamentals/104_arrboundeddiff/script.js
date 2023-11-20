// Write a JavaScript program to find two elements of an array 
// such that their absolute difference is not larger than a given integer. 
// However, it is as close as possible to the integer. 

// I think I will approach this by sorting the array, and using the 
// "two pointer" technique.


function getRandArr(arrLength, lowerBound = 0, upperBound = 100) {
    let randArr = [];

    for (let i = 0; i < arrLength; i++) {
        randArr.push(getRandInt(lowerBound, upperBound));
    }

    return randArr;
}

function getRandInt(min, max) {
    return Math.floor(Math.random()*(max-min) + min)
}

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

function getClosestDiff(int, arr) {
    // confirm parameter is valid
    if (int <= 0) {
        console.log("getClosestDiff error...");
        return;
    }

    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let diff = Math.abs(arr[j]-arr[i]);

        if (diff === int) {
            return [i,j];
        }

        else if (diff > int) {
            console.log(diff);
            j--;
            continue;
        }

        // else if (diff < bestDiff) {
        //     console.log(diff)
        //     // bestDiff = diff;
        //     // indicesOfBestDiff[0] = i;
        //     // indicesOfBestDiff[0] = j;
        //     i++;
        //     continue;
        // }

        i++; 
    }

    return diff;

}


// const myArr = getRandArr(10, 0, 100);

const myArr = [0,10,20,30,40,50,60,70,80,90]
bubbleSort(myArr);

console.log(myArr);

console.log(getClosestDiff(20, myArr));

