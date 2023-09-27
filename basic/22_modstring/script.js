function ModString(str, index) {
    let new_str = str.slice(index);
    return new_str;
}

function ConsoleAlert(message) {
    console.log(message);
    return;
}

// ConsoleAlert("testy");

console.log(ModString("contest", 1))