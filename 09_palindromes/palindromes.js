const palindromes = function (string) {
    // Clean the string: convert to lowercase and remove non-alphanumeric characters
    const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check if the clean string equals its reverse
    return cleanString === cleanString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
