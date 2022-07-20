const reverseString = function(wordToReverse) {
    const reversedArray = [];
    for(let i = wordToReverse.length - 1; i >= 0; i--){
        reversedArray.push(wordToReverse[i]);
    }
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
