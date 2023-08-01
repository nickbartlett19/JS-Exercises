function roundNumToX(num = 0, x = 0) {
    if (x > num) {
        return num;
    }

    let numArray = makeArray(num);
    console.log(numArray);

    // for (let i = 0; i < x; i++) {
    //     let len = num.length;
    //     if (+num[len - 1] >= 5) {
    //         num[len - 2] += 
    //     }
    //     num = num.slice(0, -1);
    // }

    console.log(typeof num, num);
}

function makeArray(num) {
    let numString = String(num);
    let numArray = []
    for (let i = 0; i < numString.length; i++) {
        numArray[i] = numString[i]; 
    }
    return numArray;
}

roundNumToX(123.456, 4);