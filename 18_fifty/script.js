function checkFifty() {
    let a = +prompt("a: ")
    let b = +prompt("b: ")
    if (a || b === 50) {
        return true;
    }
    else if (a + b === 50) {
        return true;
    }
    else {
        return false;
    }
}

alert(checkFifty());