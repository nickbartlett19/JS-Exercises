function multiplyOrDivide(operator) {
    var op1 = document.getElementById("op1").value;
    var op2 = document.getElementById("op2").value;
    // console.log(op1,op2);
    
    if (operator === "divide") {
        let result = op1 / op2;
        document.getElementById("result").innerHTML = result;
    }
    else if (operator === "multiply") {
        let result = op1 * op2;
        document.getElementById("result").innerHTML = result;
    }
    else {
        throw new Error();
    }

    // document.getElementById("result").innerHTML = result;
} 

function Divide() {

}