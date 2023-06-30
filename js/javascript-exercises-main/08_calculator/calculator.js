const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce( (total, current) => {
    total += current;
  }, 0);
};

const multiply = function(array) {
  return array.length === 0 ? 0 : array.reduce( (total, current) => total *= current); 
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let sum = 1;
  for(let i = 0; i <= a; i++){
    sum *= i;
  }
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
