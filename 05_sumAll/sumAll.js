const sumAll = function(x, y) {
    let total = 0;
    if(x < y){
        for(let i = x; i <= y; i++){
            total += i;
        }
    }
    if(x > y){
        for(let i = x; i >= y; i--){
            total += i;
        }
    }
    if(x < 0 || y < 0 || typeof(x) !== "number" || typeof(y) !== "number"){
        total = "ERROR";
    }
    
    return total;
};

// Do not edit below this line
module.exports = sumAll;
