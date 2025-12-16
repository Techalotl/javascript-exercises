const leapYears = function(year) {
    if (year % 400 === 0) {
        return Boolean (2>1)
    } else if ((year % 4 === 0) && (year % 100 === 0)) {
        return Boolean (1>2)
    } else if ((year % 4 === 0) && (year%100 != 0)){
        return Boolean (2>1)
    } else {
        return Boolean (1>2)
    }
};

// Do not edit below this line
module.exports = leapYears;
