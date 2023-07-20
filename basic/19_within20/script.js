function withinNum(num, bound = 20, pt1 = 100, pt2 = 400) {
    if (Math.abs(pt1 - num) < bound) {
        return true;
    }
    else if (Math.abs(pt2 - num) < bound) {
        return true;
    }
    else {
        return false;
    }
}

console.log(withinNum(381));