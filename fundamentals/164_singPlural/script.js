/* input: a string and 0 or 1 - 0 makes the word singular, 1 makes it plural.
this is done incorrectly via adding or removing an 's' to the end of the
string. */
function singPlural(word, num) {
    // check input
    if (!(typeof word === 'string' && (num === 0 || num === 1))) {
        throw new Error('Bad input.');
        return;
    }

    switch(num) {
        case 0:
            let wordSingular = word.slice(0,-1);
            return wordSingular;
        case 1:
            let wordPlural = word.concat('s');
            return wordPlural;
    }
}

console.log(singPlural('Dogs', 1));