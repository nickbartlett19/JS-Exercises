function PyString(str) {
    if (CheckForPy(str) == true) {
        return str;
    }
    else {
        return "P" + "y" + str;
    }
}

function CheckForPy(str) {
    if ((str[0] == "p" || str[0] == "P") && (str[1] == "y" || str[1] == "Y")) {
        return true;
    }
    else {
        return false;
    }
}

const myString = "Pyhaoarryu";

// console.log(CheckForPy(myString));
console.log(PyString(myString));