function strToArray(str) {
    let arr = [];

    arr = str.split(' ')

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].indexOf(',') > -1) {
    //         arr[i].replace(arr[i].indexOf(','));
    //     }
    // }

    return arr;
}

function testSTA(str) {
    console.log(str);
    console.log(strToArray(str));
}

const str0 = "Wazzup Beijing";
const str1 = "It is a tale, told by an idiot, full of sound and fury, signifying nothing";

testSTA(str1);