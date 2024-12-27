const sumAll = function(number1, number2) {
    let result = 0;
    // 1. Check if inputs are actually numbers
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        return "ERROR";
    }
    
    // 2. Check if numbers are integers by comparing the number to its floor value
    if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
        return "ERROR";
    }
    
    // 3. Check for negative numbers
    if (number1 < 0 || number2 < 0) {
        return "ERROR";
    }
    
    if (number1 > number2) {
        for (; number1 >= number2; number1--) {
            result += number1;
        }
    }
    else if (number1 < number2) {
        for (; number1 <= number2; number1++) {
            result += number1; 
        }
    }
    return result;
};



// Do not edit below this line
module.exports = sumAll;
