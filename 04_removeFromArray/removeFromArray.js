const removeFromArray = function(array,toRemove, toRemove2 = 0, toRemove3 = 0, toRemove4 = 0) {
    let i = 0
    while (i < array.length) {
        if ((array[i] === toRemove) || (array[i] === toRemove2) || (array[i] === toRemove3)|| (array[i] === toRemove4)) {
            array.splice(i,1)
        } else {
            i++
        }
    } return array
};

// Do not edit below this line
module.exports = removeFromArray;