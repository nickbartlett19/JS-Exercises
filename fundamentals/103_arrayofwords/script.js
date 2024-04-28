function strToArray(str) {
    let arr = [];

    let newStr = str.replace(",", "");

    arr = newStr.split(' ')

    return arr;
}

function testSTA(str) {
    console.log(str);
    console.log(strToArray(str));
}

const str0 = "Wazzup Beijing";
const str1 = "It is a tale, told by an idiot, full of sound and fury, signifying nothing";

testSTA(str1);