const startTime = Date.now();
var arr = []
for (var i = 0; i < 100000; i++) {
    arr.push(i);
}
console.log(arr);

const endTime = Date.now();

const finalTime = endTime - startTime;


console.log(finalTime + " milliseconds");

