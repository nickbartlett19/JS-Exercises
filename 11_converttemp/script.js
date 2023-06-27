// formulae: c = (5f-160)/9, f = 9c/5 + 32

function Convert(direction) {
    let c_temp = document.getElementById("c").value;
    let f_temp = document.getElementById("f").value;
    // console.log(c_temp, f_temp);

    if (direction === '0') { // c to f
        f_temp = (9*c_temp)/5 + 32;
        document.getElementById("f").value = f_temp;
    }
    else if (direction === '1') { // f to c
        c_temp = (5*f_temp-160)/9;
        console.log(c_temp);
        document.getElementById("c").value = c_temp;
    }
    else {
        return;
    }
}