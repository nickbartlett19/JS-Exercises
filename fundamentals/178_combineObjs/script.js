function combineObjs(objArr) {
    let newObj = {}

    for (let i = 0; i < objArr.length; i++) {
        newObj = Object.assign(newObj, objArr[i]);
    }

    return newObj;
}

let obj1 = {
    firstName: 'Jacques',
    lastName: 'Michaud'
};

let obj2 = {
    salary: '500000',
    homeValue: '1000000'
};

let obj3 = {
    city: 'Boston',
    state: 'Massachusetts'
};


let objArr = [obj1, obj2, obj3];


console.log(objArr);
console.log(combineObjs(objArr));