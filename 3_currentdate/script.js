function makeDate() {
    console.log("running makeDate()...")

    // console.log(month, day, year);
    const today = new Date;

    const [month, day, year] = [
        today.getMonth() + 1,
        today.getDate(),
        today.getFullYear(),
    ]
    
   document.getElementById("month").innerHTML = month;
   document.getElementById("day").innerHTML = day;
   document.getElementById("year").innerHTML = year;
}