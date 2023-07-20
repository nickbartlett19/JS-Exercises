// Conditions that make a year a "leap year" in the Gregorian calendar:
// i) year % 4 = 0. 
// ii) year % 100 =/= 0, unless year % 100 = 0 AND year % 400 = 0.

// const leap_years = [2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048];
// leap_years.forEach(x => console.log(leapYearCheck(x)));

// const years = range(2000,2050);
// years.forEach(x => console.log(x, leapYearCheck(x)));

const year = prompt("What year should be checked?")
console.log("Is ", year, " a leap year: ",leapYearCheck(year));

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

function range(start, stop) {
    var foo = [];
    for (i = start; i < stop + 1; i++) {
        foo.push(i);
    }
    return foo;
}