const fibonacci = function(n) {
  // Convert string input to number
  n = parseInt(n);
  
  // Handle negative numbers
  if (n < 0) return "OOPS";
  
  // Handle 0
  if (n === 0) return 0;
  
  // Handle first two numbers
  if (n === 1 || n === 2) return 1;
  
  // For all other cases, calculate fibonacci
  let prev = 1;  // Second-to-last number
  let current = 1;  // Last number
  
  // Loop n-2 times (since we already handled first two numbers)
  for (let i = 3; i <= n; i++) {
    let next = prev + current;  // Calculate next number
    prev = current;  // Update second-to-last number
    current = next;  // Update last number
  }
  
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
