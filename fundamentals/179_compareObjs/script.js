let obj1 = {
    firstName: 'Samantha',
    salary: 100_000,
    grade: '9th'
}

let obj2 = {
    firstName: 'Samantha',
    salary: 120_000,
    grade: '10th'
}

function compareObjs(obj1, obj2) {
    let objsIntersection = {}
    for (let prop1 in obj1) {
        for (let prop2 in obj2) {
            // console.log(obj1[prop1]);
            if (obj1[prop1] === obj2[prop2]) {
                objsIntersection[prop1] = obj2[prop2];
            }
        }
    }
    return objsIntersection;
}

console.log(compareObjs(obj1, obj2));