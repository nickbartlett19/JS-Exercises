// let now = Date.now();
// setTimeout(() => console.log(Date.now() - now), 999);

let funcs = [(x) => Math.abs(x), (x) => Math.random(), (x) => x*100, (x) => x**10];

function getFastestFunc(funcs, input) {
    let speed = Infinity;
    let fastestFunc = null;
    for (let func of funcs) {
        let now = performance.now();
        func(input);
        let then = performance.now();
        let funcSpeed = then-now;
        console.log(func, funcSpeed);
        if (funcSpeed < speed) {
            speed = funcSpeed
            fastestFunc = func;
        }
    }
    return [fastestFunc, speed];
}

console.log(getFastestFunc(funcs, 10));