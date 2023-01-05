function reverseString(word) {
  let lowerCaseWord = word.toLowerCase();
  let splitWord = lowerCaseWord.split("");
  let reverseArray = splitWord.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

function isPalindrome(word) {
  let reversedWord = reverseString(word)
  
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}


/* 
  Rewrite the problem in my own words here
  I need to write a function that receives one argument, a string, and returns True based on the condition that the the input string is equal to the output string that's backwards. Else return false.
*/

/* 
  Write my own test cases here
  I expect that the input string Lela will be transformed to lowercase letters lela
  I expect that the lowercase version of the input will be transformed to alel
  I expect that the function will return true or false
*/

/* 
  Add your pseudocode here

  1. Transform string to all lowercase
  2. Reverse the characters in the string
  3. Write a conditional statement: if the output (aka all lowercase, backwards string) === input (aka argument), then return true
  4. Else, return false
*/

/*
  Add written explanation of your solution here
  There are two functions. I need to find the JS methods that transform the string to lower case and reverse the characters in the string, then assign that transformed value to a new variable. This transformation is it's own function.
  The new variable then needs to be evaluated in an if else statement and return a boolean true or false. This conditional evaluation is it's own separate function that uses the above function as a callback.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
