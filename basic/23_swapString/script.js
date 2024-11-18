function swapString(str) {
    return newStr = str.charAt(str.length-1) + str.slice(1, -1) + str.charAt(0);
}

let str = 'Jebidiah Crawford';
console.log(swapString(str));

