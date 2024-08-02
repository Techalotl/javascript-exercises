const sumAll = function(num1, num2) {
    if (((num1 || num2) < 0)) {
        return "ERROR"
    } else {
        if (num2 > num1) {
            let total = num1
            for (i = num1 +1; i <= num2; i++) {
                total += i
            } return total
        } else {
            let total = num2
            for (i = num2 +1; i <= num1; i++) {
                total += i;
            } return total
        }
    }
}

// Do not edit below this line
module.exports = sumAll;
