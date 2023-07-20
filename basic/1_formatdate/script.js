// const now = new Date();

// const [month, day, hour, minutes] = [
//     now.getMonth() + 1, // months are 0 indexed, e.g. June corresponds to 5, not 6
//     now.getDate(),
//     now.getHours(),
//     now.getMinutes(),
// ];


// console.log(typeof(month));
// console.log(day);
// console.log(month);


function makeNewDate() {
    const now = new Date();

    const [month, day, hour, minutes] = [
        now.getMonth() + 1, // months are 0 indexed, e.g. June corresponds to 5, not 6
        now.getDate(),
        now.getHours(),
        now.getMinutes(),
    ];
    document.getElementById("month").innerHTML = month;
    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minutes;
}

