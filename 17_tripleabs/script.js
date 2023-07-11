const a = +prompt("a: ");

alert(tripleAbs(a));

function tripleAbs(a) {
    if (a > 19) {
        return 3*(Math.sqrt((a-19)**2));
    }
    else {
        return (Math.sqrt((a-19)**2));
    }
}