const permutations = function(array, size = array.length) {
  const newArray = []
  if (size === 0 || size === 1) {
    newArray.push([...array]);
    return newArray;
  } 
  for (let i = 0; i < size; i++) {
    const recursiveArray = permutations(array, size - 1);
    newArray.push(...recursiveArray)
    if (size % 2 === 1) {
      let temp = array[0]
      array[0] = array[size - 1];
      array[size - 1] = temp;
    } else {
      let temp = array[i];
      array[i] = array[size - 1];
      array[size - 1] = temp;
    }
  }
  return newArray
};
  
// Do not edit below this line
module.exports = permutations;
