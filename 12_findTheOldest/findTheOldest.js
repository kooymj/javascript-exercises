const findTheOldest = function(objs) {
    const oldest = objs.sort(function(a, b){
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });
    
    if(!oldest[0].hasOwnProperty('yearOfDeath')){
        return oldest[1];
    }
    return oldest[0];

    
};

// Do not edit below this line
module.exports = findTheOldest;
