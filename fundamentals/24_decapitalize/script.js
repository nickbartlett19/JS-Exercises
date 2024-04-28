function deCapitalize(inputStr) {
    if (isCapitalized(inputStr) == true) {
        let firstChar = inputStr[0];
        firstChar = firstChar.toLowerCase();
        newStr = inputStr.slice(1);
        console.log(newStr);
        newStr = firstChar + newStr;
    }
    return newStr;
}

function isCapitalized() {
    return true;
}


const str = "Acd";
console.log(deCapitalize(str));