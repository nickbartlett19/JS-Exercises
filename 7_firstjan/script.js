// January 1st 2014 was a Wednesday
// The day of the week increase by one each year unless the year is a leap year,
// where it increases by two. 

const days = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"];

for (var year = 2014; year < 2050; year++) {
    if (getDayOfTheWeek(year) === "Sunday") {
        console.log(year);
    }
    else {
        continue;
    }
}

/*
getDayOfTheWeek() gets the day of the week of Jan 1st for years after 2014 AD.
*/
function getDayOfTheWeek(year) {
    let counter = 0; // leap year counter
    for (let i = 2014; i < year; i++) {
        if (leapYearCheck(i) == true) {
            counter++;
        }
        else {
            continue;
        }
    }

    // let pickDay = (year - 2014 + counter) % 7;
    let dayOfTheWeek = days[(year - 2014 + counter) % 7];
    return dayOfTheWeek;
}

/* 
leapYearCheck() checks if the inputted year is a leap year.
*/
function leapYearCheck(year) {
    if (year % 4 == 0) {
        if (year % 100 != 0 || (year % 100 == 0) && (year % 400 == 0)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}