/* This function will be error prone based on the input the user provides.
Like if the first function takes multiple arguments, but the second function
returns a single value, this could be a problem. So its user dependent to
make sure the arrOfFunctions is good.  */

/* composeFunctions()
input: an arry of functions, and value or values
output: the function f which is the left to right composition of the 
functions in arrOfFunctions at val. */
function composeFunctions(arrOfFunctions, val) {

    let length = arrOfFunctions.length;
    // console.log(length, val, arrOfFunctions[length-1])

    let result = arrOfFunctions[length-1](...val);


    for (let i = arrOfFunctions.length - 2; i >= 0; i--) {
        result = arrOfFunctions[i](result);
        console.log(result);
    }

    return result;
}

// let functions = [Math.abs, (a,b) => (a+b)];
let functions = [(a) => (a), (a,b) => (a+b)];

console.log(composeFunctions(functions,[-1,-3]));