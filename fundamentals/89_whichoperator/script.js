function testOperators(op1, op2, output) {
    let testResult = [];
    console.log(output);
    // switch (output) {
    //     case op1 + op2:
    //         console.log(op1 + op2)
    //         console.log("tested +")
    //         testResult.push("+");
    //     case op1 - op2:
    //         console.log(op1 - op2)
    //         console.log("tested -")
    //         testResult.push("-");
    //     case op1 * op2:
    //         testResult.push("*");
    //     case op1 / op2:
    //         testResult.push("/");
    //     default:
    //         break;
    // }

    if (op1 + op2 === output) {
        testResult.push("+");
    }
    if (op1 - op2 === output) {
        testResult.push("-");
    }
    if (op1 * op2 === output) {
        testResult.push("*");
    }
    if (op1 / op2 === output) {
        testResult.push("/");
    }

    return testResult;
}

console.log(testOperators(1,1,1));