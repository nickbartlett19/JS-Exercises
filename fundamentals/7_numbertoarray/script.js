function numToArray(num) {
    let array = [];
    num = String(num);

    for (let i = 0; i < num.length; i++) {
        array.push(num[i]);
    }
    return array;
}

console.log(numToArray(156));