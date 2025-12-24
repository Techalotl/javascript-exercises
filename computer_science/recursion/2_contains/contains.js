const contains = function(obj, value) {
  if (Object.values(obj).includes(value)) return true;
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      if (contains(obj[key], value)) return true;
    }
  }
  return false
}; 
  
// Do not edit below this line
module.exports = contains;
