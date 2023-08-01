function roundNumToX(num = 0, x = 0) {
    if (x < 0) {
        return num;
    }

    return Math.round(num*(10**x)) / 10**x;
}

console.log(roundNumToX(123.456789101112, 7));