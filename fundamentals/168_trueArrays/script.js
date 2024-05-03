function makeTwoArrays(arr) {
    let trueArr = [];
    let falseArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            trueArr.push(arr[i]);
        }
        else {
            falseArr.push(arr[i]);
        }
    }

    return [trueArr, falseArr];
}

let arr = [0, 1, false, "", Math.abs(1/0), 178];

console.log(makeTwoArrays(arr));