function reverseString(string) {
    let newString = ""
    for (let i = 0; i < string.length; i++) {
        newString = string[i] + newString;
        // console.log(i, string[i], newString);
    }
    return newString;
}

const myString = "abcdefghijklmnopqrstuvwxyz"
console.log(reverseString(myString));