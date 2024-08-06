const palindromes = function (word, signs = ["!", ",","."," "]) {
    let reverseWord = []
    let newWord = []
    newWord = [...word.toLowerCase()]
    let onlyLetters = []
    newWord.forEach((letter => {
        if (!signs.includes(letter)) {
            onlyLetters.push(letter);
        } 
    }))
    reverseWord = onlyLetters.toReversed();
    if (reverseWord.toString() === onlyLetters.toString()) {
        return true;
    } else {
        return false;
    }

    }

// Do not edit below this line
module.exports = palindromes;
