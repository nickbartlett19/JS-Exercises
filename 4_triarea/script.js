function triArea() {

    console.log("running triArea() ...")
    s1 = Number(document.getElementById("s1").value);
    s2 = Number(document.getElementById("s2").value);
    s3 = Number(document.getElementById("s3").value);
    
    if (validTri(s1,s2,s3) === false) {
        area = "ERROR";
        document.getElementById("area").innerHTML = area;
        return
    }
    else {
        console.log("validTri === true")
    }

    s = (s1 + s2 + s3)/ 2 // semiperimiter
    area = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
    document.getElementById("area").innerHTML = area;

}

function validTri(s1, s2, s3) {
    if (s1 + s2 <= s3) {
        return false;
    }
    else if (s1 + s3 <= s2) {
        return false;
    }
    else if (s2 + s3 <= s1) {
        return false;
    }
    else {
        return true;
    }
}
