let arr = [0,2,-3,5,-4,4,5,7,9,-11,-13];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

function negFilter(arr, predicate) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!predicate(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function neg(num) {
    if (num < 0) {
        return true;
    }
    else {
        return false;
    }
}

function pos(num) {
    if (num >= 0) {
        return true;
    }
    else {
        return false;
    }
}


let newArr = [];

newArr = negFilter(arr, neg);
newArr = negFilter(arr, pos);

console.log(newArr);