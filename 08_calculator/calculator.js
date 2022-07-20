const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

// const sum = function(numbers) {
// 	return numbers.reduce((a, b) => a + b, 0);
// };
const sum = function(numbers){
  let total = 0;
  for(let i = 0; i < numbers.length; i++){
    total += numbers[i];
  };
  return total;
}

const multiply = function(numbers) {
  let total = numbers[0];
  for(let i = 1; i < numbers.length; i++){
    total *= numbers[i];
  }
  return total;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let total = a;
  if(a === 0){
    return 1;
  }
  for(let i = a - 1; i >= 1; i--){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
