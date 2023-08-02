function filterArray(array, filter) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === filter) {
            array.splice(i, 1);
        }
    }
    return array
}

const array = [1,2,3,4,5,6];
const arrayNew = filterArray(array, 3);

console.log(arrayNew);