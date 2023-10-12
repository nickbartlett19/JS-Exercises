function deCapitalize(str) {

    if (isCapitalized(str) == true) {
        let firstChar = str[0];
        firstChar = firstChar.toLowerCase;
        str.splice(1,-1);
        str = firstChar + str;
    }

    return str;
}

function isCapitalized() {
    return true;
}


const str = "Acd";
console.log(deCapitalize(str));