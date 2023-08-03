function makeRandomHex(hex_digits) {
    // console.log(rand_num);
    let code = ""
    while (code.length < 6) {
        let rand_num = makeRandNum(16);
        code = code + hex_digits[rand_num] 
    }
    return code;
}

function makeRandNum(max) {
    let rand_num = Math.floor(Math.random()*max);
    return rand_num;
}


const hex_digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
// console.log(hex_digits.length);

var string = "abcd";
console.log(string.length);
console.log(makeRandomHex(hex_digits));