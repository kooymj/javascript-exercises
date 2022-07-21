const palindromes = function (str) {
    var reg = /[\W_]/g;
    var lowerCase = str.toLowerCase().replace(reg, '');
    
    var reverseStr = lowerCase.split('').reverse().join('');

    return reverseStr === lowerCase;
};

// Do not edit below this line
module.exports = palindromes;
