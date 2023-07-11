function nvTripleSum() {
    let int1 = Number(prompt("int1: "));
    let int2 = Number(prompt("int2: "));

    if (int1 === int2) {
        return 3*(int1 + int2);
    }
    else {
        return (int1 + int2);
    }
}

const exTripleSum = function() {
    let int1 = Number(prompt("int1: "));
    let int2 = Number(prompt("int2: "));

    if (int1 === int2) {
        return 3*(int1 + int2);
    }
    else {
        return (int1 + int2);
    }
}

// console.log(nvTripleSum());
console.log(exTripleSum());
