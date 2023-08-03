function extractValues(array, index_arr) {
    if (!checkValidity(array, index_arr)) {
        return;
    }
    let extractedArray = [];

    for (const elem of index_arr) {
        console.log(elem);
        extractedArray.push(array[elem]);
    }
    return extractedArray;
}

function checkValidity(array, index_arr) {
    if (array.length < largestElem(index_arr)) {
        return false;
    }
    else {
        return true;
    }
}

function largestElem(array) {
    let elem = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > elem) {
            elem = array[i];
        }
    }
    return elem;
}

const indices = [0,1,4,5,6,7];
// const indices = [0,1,4];
// console.log(largestElem(indices));
const arr = ['Mark', 'Samantha', 53, -176, 
'a', 22, 'b', 'c', 'd', 'green', 420];

console.log(extractValues(arr, indices));