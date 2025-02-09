

# Utility Functions in JavaScript

This repository contains several utility functions written in JavaScript, designed for various tasks including determining ticket prices based on age, checking for leap years, generating Fibonacci sequences, and verifying palindrome strings.

## Functions Overview

### 1. `findAge(age)`

This function determines the ticket price based on the age of the person.

- **Input**: 
  - `age` (number): The age of the person.
- **Returns**: 
  - A string indicating the ticket price:
    - "$10" for age 12 or younger
    - "$15" for age between 13 and 17 (inclusive)
    - "$20" for age 18 and older

#### Example Usage:

```javascript
console.log(findAge(18)); // Output: "$20"
```

---

### 2. `getLeapYear(year)`

This function checks whether a given year is a leap year.

- **Input**:
  - `year` (number): The year to be checked.
- **Returns**: 
  - A string stating either "Leap Year" or "Not a leap Year".

#### Example Usage:

```javascript
console.log(getLeapYear(2000)); // Output: "Leap Year"
```

---

### 3. `fibonacciSequence(fib)`

This function generates the Fibonacci sequence up to a specified number.

- **Input**:
  - `fib` (number): The upper limit for the Fibonacci sequence.
- **Returns**: 
  - An array of Fibonacci numbers from 0 up to `fib` (inclusive).

#### Example Usage:

```javascript
console.log(fibonacciSequence(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21]
```

---

### 4. `isPalindrome(str)`

This function checks if the provided string is a palindrome.

- **Input**:
  - `str` (string): The string to be checked.
- **Returns**: 
  - `true` if the string is a palindrome, otherwise `false`.

#### Example Usage:

```javascript
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
```

---

## Installation

To use these functions, simply copy the code into your JavaScript environment. No additional installations or dependencies are needed.

## License

This project is open source and available under the MIT License.




