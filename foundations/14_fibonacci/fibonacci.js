const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS"
    } else {
        let sequence = [0,1]
        for (let i = 2; i <= number; i++) {
            sequence.push((sequence[i-2]) + (sequence[i-1]));
        } return sequence[number]
        
    }
};

// Do not edit below this line
module.exports = fibonacci;
