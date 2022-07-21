const fibonacci = function(nth) {
    if(nth < 0){
        return 'OOPS';
    }
    if(isNaN(nth)){
        nth = Number(nth);
    }
    let previousNum = 0;
    let thisNum = 1;
    let nextNum = 1;
    for(let i = 1; i < nth; i++){
        nextNum = previousNum + thisNum;
        previousNum = thisNum;
        thisNum = nextNum;
    }
    return nextNum;
};

// Do not edit below this line
module.exports = fibonacci;
