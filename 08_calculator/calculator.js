const add = function(num1, num2) {
	return Number(num1 + num2);
};

const subtract = function(num1, num2) {
	return Number(num1 - num2);
};

const sum = function(array) {
	const initialValue = 0;
  const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,
);
  return sumWithInitial;
};

const multiply = function(array) {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function(num1, num2) {
  poweredProduct = Number(num1**num2);
  return poweredProduct;
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  for (i = num -1; i >= 1; i--) {
    num *=  i;
  }
  return num;
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
