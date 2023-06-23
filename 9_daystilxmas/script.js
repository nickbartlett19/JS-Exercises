const xmas = 359; // xmas is the 359th day of the year

/* monthDays is an array with the number of days in each month, in order.
february is 28 because leap years don't affect the final result. */

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30 ,31 ,30, 31];

var days = getDays();
// var days = 363;

    if (xmas-days < 0) {
        console.log(`Christmas happened ${Math.abs(xmas-days)} days ago! 
You have to wait another ${365 + Math.abs(xmas-days)} days until Christmas
next year.`)
    }
    else {
        console.log(`There are ${xmas-days} days until Christmas.`);
    }
 

// console.log(monthDays.February);

function getDays() {
    let today = new Date;
    let day = today.getDate();
    let month = today.getMonth();
    let days = Number(day);

    for (let i = 0; i < month; i++) {
        days = days + monthDays[i];
    }

    return days;
}