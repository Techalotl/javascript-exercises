const totalIntegers = function(array) {
  let sum = 0;
  if (typeof array !== 'object') return undefined;
  for (const key in array) {
    if(typeof array[key] === 'number' && Number.isInteger(array[key])) sum++;
    if (typeof array[key] === 'object' && array[key] !== null){
      sum += totalIntegers(array[key])
    }
  }
  return sum
};
  
// Do not edit below this line
module.exports = totalIntegers;
