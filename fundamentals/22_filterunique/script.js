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

function makeArrUnique(array) {
    for (let i = 0; i < array.length; i++) {
        if (searchForward(i, array) == true) {
            array.splice(i, 1);
            console.log("spliced!")
        }
    }
    return array;
}

function searchForward(index, array) {
    let fixedIndex = index;
    for (let i = index + 1; i < array.length; i++) {
        if (array[i] == array[fixedIndex]) {
            return true
        }
    }
    return false;
}

var myArray = makeRandomArray(10);
// var myArray = [0,1,2,3,4,1,5,4];
console.log(myArray);

// for (let i = 0; i < myArray.length; i++) {
//     console.log(searchForward(i, myArray));
// }

var myArray = makeArrUnique(myArray);
console.log(myArray);
