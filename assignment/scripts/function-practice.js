console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  let greeting = `Hello, ${name}!`;
  return greeting;
}
// Remember to call the function to test
console.log(helloName('Nathaniel'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber;
  return sum;
  
  // return firstNumber + secondNumber;
}
console.log(addNumbers(8,9));


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
let product = num1 * num2 * num3;
return product;
}
console.log(multiplyThree(2, 3, 4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(isPositive(1));
console.log(isPositive(-2));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
let lastItem = array[array.length - 1];
return lastItem;
}
console.log(getLast([1,2,3,4,5]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
let result = false;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) {
    result = true;
    }
   
  }
  return result;
}
console.log(find(3, [1,2,3,4,5]));

//---NOT SURE WHY THE LAST AUTOMATED TEST ISN'T HAPPY EVEN THOUGH I DID ALL THE QUESTIONS?---


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
