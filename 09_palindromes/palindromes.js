const palindromes = function (string) {
    const alphanumerical = "1234567890abcdefghijklmnopqrstuvwxyz";
            let newString = string.toLowerCase().split("").filter(character => alphanumerical.includes(character)).join("");
            let reverseString = newString.split("").reverse().join("");

            return(reverseString === newString)
}

// Do not edit below this line
module.exports = palindromes;
