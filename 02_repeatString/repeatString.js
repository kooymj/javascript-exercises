const repeatString = function(word, num) {
    let wordToReturn = "";
    if(num < 0){
        return "ERROR"
    }
    for(let i = 0; i < num; i++){
        wordToReturn += word;
    }
    return wordToReturn;
};

// Do not edit below this line
module.exports = repeatString;
