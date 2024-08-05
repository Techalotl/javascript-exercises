const palindromes = function (word) {
    let reverseWord = ""
    for (let i = 1; i <= word.length; i++) {
        reverseWord += word.at(-i)
    } if (reverseWord == word) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
