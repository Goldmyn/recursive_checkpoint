// This function determines the ticket price based on age
function findAge(age) {
  // If age is 12 or younger, return the price $10
  if (age <= 12) {
    return "$10";
  }
  // If age is between 13 and 17 (inclusive), return the price $15
  else if (age >= 13 && age <= 17) {
    return "$15";
  }
  // For all ages 18 and older, return the price $20
  else {
    return "$20";
  }
}

// Example usage 
console.log(findAge(18)); 




// This function checks whether a given year is a leap year
function getLeapYear(year) {
  // A year is a leap year if it is divisible by 4,
  // but not divisible by 100, unless it is also divisible by 400
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap Year"; // If conditions are met, return "Leap Year"
  } else {
    return "Not a leap Year"; // Otherwise, return "Not a leap Year"
  }
}

// Example usage of getLeapYear function
console.log(getLeapYear(2000)); // Output: "Leap Year"

function fibonacciSequence(fib) {
  if (fib < 0) {
    return "Invalid Input";
  }

  let result = [];

  // Recursive helper function to compute Fibonacci number
  function getFibonacci(n) {
    if (n === 0) {
      return 0; // Base case: F(0) = 0
    }
    if (n === 1) {
      return 1; // Base case: F(1) = 1
    }
    // Recursive case: F(n) = F(n - 1) + F(n - 2)
    return getFibonacci(n - 1) + getFibonacci(n - 2);
  }

  // Recursive function to generate sequence
  function generateSequence(currentNum) {
    if (currentNum > fib) {
      return; // Base case: stop if currentNum exceeds fib
    }

    result.push(getFibonacci(currentNum)); // Add the Fibonacci number to the result

    // Continue to the next number
    generateSequence(currentNum + 1);
  }

  // Start generating the Fibonacci sequence
  generateSequence(0);

  return result;
}

// Example usage
console.log(fibonacciSequence(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21]


function isPalindrome(str) {
  // Helper function to clean the string by removing non-alphanumeric characters
  const cleanString = (s) => {
    return s.replace(/[^\w]/g, '').toLowerCase(); // Remove non-alphanumeric chars and convert to lower case
  };

  const cleanedStr = cleanString(str); // Clean the input string
  
  // Recursive function to check for palindrome
  function checkPalindrome(left, right) {
    if (left >= right) {
      return true; // If pointers cross, it's a palindrome
    }
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false; // Mismatched characters indicate it's not a palindrome
    }
    return checkPalindrome(left + 1, right - 1); // Move towards the center
  }

  return checkPalindrome(0, cleanedStr.length - 1); // Start checking from the ends
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); 
console.log(isPalindrome("race a car")); 