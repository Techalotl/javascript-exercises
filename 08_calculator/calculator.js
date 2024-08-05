const add = function(num1, num2) {
	let total = num1 + num2;
  return total;
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(nums) {
	let total = 0
  nums.forEach(number => {
    total += number;
  }); return total;
};

const multiply = function(nums) {
  let total = 1
  nums.forEach(number => {
    total *= number;
  }); return total;
};

const power = function(number, toPower) {
	return Math.pow(number, toPower);
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    for(let i = num -1; i >= 1; i--){
      num *= i
    } return num;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
