function mult3or7(num) {
    if ((num % 3 === 0) || (num % 7 === 0)) {
        return true;
    }
    else {
        return false;
    }
}


for (let i = 0; i <= 35; i++) {
    console.log(i, mult3or7(i));
}