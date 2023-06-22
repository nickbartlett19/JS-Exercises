// var rand_num = getRandomInt(5,15);
// console.log(rand_num);

play();

function play() {
    var guess = Number(prompt("Guess a number: "));
    var rand_num = getRandomInt(0,5);

    if (guess === rand_num) {
        alert("correct");
    }
    else {
        alert("incorrect" + " " + rand_num);
    }
}

/* 
getRandomInt()
input: min and max of range
output: random integer in range
getRandomInt() generates a random integer within a given range.
*/
function getRandomInt(min, max) {
    var arr = [];

    // generate range of integers
    for (var i = min; i < max; i++) {
        arr.push(i);
    }
    // make a random selection and return it
    return arr[Math.floor(Math.random() * arr.length)];
}