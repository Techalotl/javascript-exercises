const findTheOldest = function(array) {
    array.map((person) => {if (person.yearOfDeath == undefined) { person.yearOfDeath = (new Date()).getFullYear()}} );
    array.sort((a,b) => {
    const firstPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return firstPerson > nextPerson ? -1: 1;
    }) 
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
