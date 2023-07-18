/*

//* Kata01: Supermarket Pricing

// The exercise is to experiment with various models for representing money and prices that are flexible enough to deal with these (and other) pricing schemes, and at the same time are generally usable (at the checkout, for stock management, order entry, and so on).

// * Consider these:
// Does fractional money exist?
// when (if ever) does rounding take place?
// how do you keep an audit trail of pricing decisions (and do you need to)?
// are costs and prices the same class of thing?
// if a shelf of 100 cans is priced using “buy two, get one free”, how do you value the stock?

// build an array of "products". for each of the 3rd that is pulled reduce the total amount by 1$.

// How do we accumulate the price of each product entered?
// How do we set a discount for every 3 items picked?

// I want to return the value (either 0 if %3 === 0, or 1 if not) from the current index of the array.

function discountEvery3rd(...products) {
  let productSum = 0;
  let total = 0;
  const pickedProducts = [...products];
  for (let i = 0; i < pickedProducts.length; i++) {
    if ([i + 1] % 3 === 0) {
      total -= 1;
    }
    productSum += pickedProducts[i];
    total += pickedProducts[i];
  }
  console.log(productSum);
  console.log(total);
}

let a = (b = c = d = e = f = g = h = ii = j = k = 1);
const products = [a, b, c, d, e, f, g, h, ii, j, k];
discountEvery3rd(a, b, c, d, e, f, g, h, ii, j, k);

//* Kata02: The Mexican Wave
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

//! This is as far as I got without looking up anything besideds .toUpperCase()... Got it mixed up with Python.
function wave(str) {
  const waveArr = [];
  const returnArr = [];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    // pass over any blank spots.
    if (i === "") {
      continue;
    }
    newStr = str[i].toUpperCase(str);
    // capatalize each index.
    waveArr.push(newStr);
    // Adding the new Capital letter to each index in the strings new array.
    for (let j = 0; j < str.length; j++) {
      str[j] = newStr[j];
      waveArr.push(str[j]);
      returnArr.push(waveArr);
    }
  }
  return waveArr;
}

console.log(wave("hell o"));
//% Output:
// [
//   'H', 'h', 'e', 'l', 'l', ' ', 'o',
//   'E', 'h', 'e', 'l', 'l', ' ', 'o',
//   'L', 'h', 'e', 'l', 'l', ' ', 'o',
//   'L', 'h', 'e', 'l', 'l', ' ', 'o',
//   ' ', 'h', 'e', 'l', 'l', ' ', 'o',
//   'O', 'h', 'e', 'l', 'l', ' ', 'o'
// ]

function wave2(str) {
  let waveArr = [];
  const returnArr = [];
  let newStr = str;
  for (let i = 0; i < str.length; i++) {
    // pass over any blank spots // FIX THIS
    if (i === "") {
      continue;
    }
    newStr = str[i].toUpperCase(str);
    // capatalize each index.
    waveArr.push(newStr);
  }
  // Turn array into string with no commas or spaces.
  waveArr = waveArr.toString().replaceAll(",", "");
  // Adding the new Capital letter to each index in the string.

  for (let j = 0; j < str.length; j++) {
    returnArr[j] = waveArr[j];
  }
  return waveArr;
}

console.log(wave2("hell o"));
//% Output:
// HELL O

//* Kata03: Wonderland-clojure-katas

// This Alphabet Cipher involves alphabet substitution using a keyword.

// First you must make a substitution chart like this, where each row of the alphabet is rotated by one as each letter goes down the chart.

//    ABCDEFGHIJKLMNOPQRSTUVWXYZ
//  A abcdefghijklmnopqrstuvwxyz
//  B bcdefghijklmnopqrstuvwxyza
//  C cdefghijklmnopqrstuvwxyzab
//  D defghijklmnopqrstuvwxyzabc
//  E efghijklmnopqrstuvwxyzabcd
//  F fghijklmnopqrstuvwxyzabcde
//  G ghijklmnopqrstuvwxyzabcdef
//  H hijklmnopqrstuvwxyzabcdefg
//  I ijklmnopqrstuvwxyzabcdefgh
//  J jklmnopqrstuvwxyzabcdefghi
//  K klmnopqrstuvwxyzabcdefghij
//  L lmnopqrstuvwxyzabcdefghijk
//  M mnopqrstuvwxyzabcdefghijkl
//  N nopqrstuvwxyzabcdefghijklm
//  O opqrstuvwxyzabcdefghijklmn
//  P pqrstuvwxyzabcdefghijklmno
//  Q qrstuvwxyzabcdefghijklmnop
//  R rstuvwxyzabcdefghijklmnopq
//  S stuvwxyzabcdefghijklmnopqr
//  T tuvwxyzabcdefghijklmnopqrs
//  U uvwxyzabcdefghijklmnopqrst
//  V vwxyzabcdefghijklmnopqrstu
//  W wxyzabcdefghijklmnopqrstuv
//  X xyzabcdefghijklmnopqrstuvw
//  Y yzabcdefghijklmnopqrstuvwx
//  Z zabcdefghijklmnopqrstuvwxy

let alphaArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let newArray = [...alphaArray];
newArray = newArray.toString().replaceAll(",", "");

let matrixArray = [];
matrixArray.push(newArray);
for (let j = 0; j < newArray.length; j++) {
  let [a, ...x] = newArray;
  x.push(a[j]);
  x = x.toString().replaceAll(",", "");
  matrixArray.push(x);
  for (let i = 0; i < 1; i++) {
    let [aa, ...xx] = x;
    xx.push(aa);
    xx = xx.toString().replaceAll(",", "");
    matrixArray.push(xx);
  }
  console.log(matrixArray);
}
// Both parties need to decide on a secret keyword. This keyword is not written down anywhere, but memorized.

// To encode the message, first write down the message.

// meetmebythetree
// Then, write the keyword, (which in this case is scones), repeated as many times as necessary.

// sconessconessco
// meetmebythetree
// Now you can look up the column S in the table and follow it down until it meets the M row. The value at the intersection is the letter e. All the letters would be thus encoded.

// sconessconessco
// meetmebythetree
// egsgqwtahuiljgs
// The encoded message is now egsgqwtahuiljgs

// To decode, the person would use the secret keyword and do the opposite.

//* Kata04: Sorting It Out

// - Clojure Katas
// There are times when whipping up a sort of our own can outperform these generic routines. Our challenge this week is to implement a couple of different sorts. (However, at the risk of giving the game away, these sorts both have something in common).
//* Sorting Balls

let list = [1, 10, 9, 8, 3, 6];
function sortIt(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let temp = arr[i];
      if (arr[i] < arr[j]) {
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(sortIt(list));

const lottoBalls = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
];
const daisyMaePicks = 10;
const ballPicks = [];
function ballSelect(balls) {
  let newLotto = [...balls];
  for (let i = 0; i < daisyMaePicks; i++) {
    const ballPull = Math.floor(Math.random() * newLotto.length);
    ballPicks.push(ballPull);
  }
  sortIt(ballPicks);
  console.log(ballPicks);
  return ballPicks;
}

ballSelect(lottoBalls);

//* Sorting Characters
// See the list of winning numbers in sorted order as soon as possible.

let string = "The quick brown fox jumped over the lazy dog";

function stringSort(str) {
  let newStr = str.replaceAll(" ", "").toLowerCase();
  let funcArray = Array.from(newStr);
  console.log(funcArray);
  for (let i = 0; i < funcArray.length; i++) {
    for (let j = i + 1; j < funcArray.length; j++) {
      if (funcArray[i] > funcArray[j]) {
        temp = funcArray[i];
        funcArray[i] = funcArray[j];
        funcArray[j] = temp;
      }
    }
  }
  let value = funcArray.join("").toLowerCase();
  console.log(value);
  return value;
}
stringSort(string);

//* Kata 05: Array Intersection and Fibonacci sequence.
// Array Intersection: Write a function that takes in two arrays as input and returns a new array containing only the elements that are present in both arrays, without any duplicates.

//* Array Intersection
function intersect(arr1, arr2) {
  let newArr1 = [...arr1];
  let newArr2 = [...arr2];
  let dupArray = [];
  for (let i = 0; i < newArr1.length; i++) {
    for (let j = 0; j < newArr2.length; j++) {
      newArr1[i] === newArr2[j]
        ? dupArray.push(newArr1[i]) && dupArray.push(newArr2[j])
        : dupArray.push();
    }
  }
  dupArray = new Set(dupArray);
  console.log(dupArray);
  const [...returnArray] = [...dupArray];
  console.log(returnArray);
}
const array1 = [12, 24, 23, 34, 12, 22, 12];
const array2 = [12, 24, 533, 66, 23, 22, 1, 56];

intersect(array1, array2);

//* Anagram Checker
// Write a function that takes in two strings and returns true if they are anagrams, and false otherwise. Anagrams are words or phrases formed by rearranging the letters of another word or phrase.

let str1 = "laps";
let str2 = "pals";

function checkAnaGrama(str1, str2) {
  let str1check = str1.split("").sort().join("");
  let str2check = str2.split("").sort().join("");
  if (str1check.length !== str2check.length)
    console.log(`${str1check} is not the same length as ${str2check}`);
  else if (str1check === str2check)
    console.log(`${str1check} and ${str2check} are an Anagram`);
  else if (str1check !== str2check) return false;
}

checkAnaGrama(str1, str2);

//* Anagram check simplified.

function palCheck(words) {
  const arr1 = Array.from(words);
  const rev = arr1.reverse().join("");
  if (rev === words) return true;
}

console.log(palCheck("bob"));

//* Kata 06:

//Reverse Words: Write a function that takes a sentence as input and returns a new sentence where the order of the words is reversed. For example, if the input is "Hello World", the output should be "World Hello".

const wordStr = "Reverse this string";

function reverseMe(str) {
  str = str.split(" ");
  let reversedWord = [];
  for (let i = str.length - 1; i > -1; i--) {
    reversedWord.push(str[i]);
  }
  reversedWord = reversedWord.join(" ");
  console.log(reversedWord);
}
reverseMe(wordStr);

// Prime Number Checker: Write a function that takes a number as input and returns true if it is a prime number, and false otherwise. A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

function checkIfPrimeNum(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(checkIfPrimeNum(111));

// Object Key Capitalizer: Write a function that takes an object as input and returns a new object where all the keys are capitalized. The values of the keys should remain the same.

const joelObj = {
  fistName: "joel",
  lastName: "fuelling",
};

const newObj = Object.entries(joelObj);
console.log(newObj);

function upperCaseKeys(obj) {
  const returnObj = {};
  const upperObj = Object.entries(obj);
  for (let [key, value] of upperObj) {
    key = key.toUpperCase();
    returnObj[key] = value; //! HOW TO ADD K/V PAIR TO OBJECT
  }
  console.log(returnObj);
}

upperCaseKeys(joelObj);

//* Kata 07:

//! WHAT A DOOZY!
//  Array Flattening: Write a function that takes an array with nested arrays and returns a new array with all the elements flattened into a single level. For example, if the input array is [1, [2, [3, 4], 5], 6], the output should be [1, 2, 3, 4, 5, 6].

const testArray = [1, [2, [3, 4], 5], 6];
console.log(testArray);

function flattenedNestedArray(y) {
  if (y === Array) {
    let arr = [];
    for (let i = 0; i < y.length; i++) {
      if (Array.isArray(y[i])) {
        arr = arr.concat(flattenedNestedArray(y[i]));
      } else {
        arr.push(y[i]);
      }
    }
    return arr;
  } else {
    return [y];
  }
}
console.log(flattenedNestedArray(testArray));

// Missing Number: Write a function that takes an array of numbers from 1 to n (with one number missing) and returns the missing number. The array is not guaranteed to be in sorted order, and the missing number will always be between 1 and n.

const testArr = [1, 2, 3, 5, 4, 8, 7, 9];

function findMissingNo(arr) {
  arr = arr.sort();
  let arrWithAllNumbers = Array(arr[arr.length - 1])
    .fill()
    .map((v, i) => i + 1);
  for (let i = 0; i < arrWithAllNumbers.length; i++) {
    if (arr[i] !== arrWithAllNumbers[i]) return arr[i] - 1;
  }
}

console.log(findMissingNo(testArr));

const testArr1 = [1, 5, 7, 3, 9];

function findMissingNumbers(arr) {
  arr = arr.sort();
  let missingNosArray = [];
  let testArr = Array(arr[arr.length - 1])
    .fill()
    .map((v, i) => i + 1); // Creates and fills testArr with i + 1 for each index, up to the maximum index found by .sort(), 9.
  console.log(testArr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== testArr[i]) missingNosArray.push(arr[i] - 1);
  }
  return missingNosArray;
}

console.log(findMissingNumbers(testArr1));

//* Kata 08:

// Unique Characters: Write a function that takes a string as input and returns true if all the characters in the string are unique (i.e., no duplicate characters), and false otherwise. Ignore whitespace and consider the characters to be case-sensitive.

// Easy Way using Set.
function checkArrAgainstSet(str) {
  const setCheck = new Set(str);
  setCheck.size === str.length ? true : false;
}
checkArrAgainstSet("frisbee");

function checkStrForUnique(str) {
  const outputArr = [...str];
  for (let i = 0; i < str.length; i++) {}
}
checkStrForUnique("test");
// Sum of Digits: Write a function that takes a positive integer as input and returns the sum of its digits. For example, if the input is 123, the output should be 6 (1 + 2 + 3 = 6).

function addEmUp(numb) {
  let numStr = numb + "";
  let addedUp = 0;
  for (eachNum of numStr) {
    addedUp += eachNum * 1;
  }
  console.log(addedUp);
}

addEmUp(1562);
// Array Rotation: Write a function that takes an array and a number of positions to rotate as input. The function should rotate the elements of the array to the right by the given number of positions. For example, if the input array is [1, 2, 3, 4, 5] and the number of positions is 2, the output should be [4, 5, 1, 2, 3].

// function rotateArray(arr, amount) {
//   const returnArr = [];
//   for (let x of arr) {
//     returnArr.push(x);
//   }
// }
// let arr = [2, 4, 5, 6];
// console.log(rotateArray(arr, 3));
*/
//* Kata 09:

// Challenge 1: Array Manipulation
// Write a function multiplyBy that takes an array of numbers and a multiplier, and returns a new array with each element multiplied by the given multiplier.
const xArr = [1, 2, 3, 4];

function multiplyBy(arr, x) {
  const newArr = [];
  for (const y of arr) {
    newArr.push(y * x);
  }
  return newArr;
}

console.log(multiplyBy(xArr, 2));

// Challenge 2: Data Transformation
// Write a function formatData that takes an array of objects representing students and transforms it into an array of strings in the format "<name> is from <country>". Each object in the input array has the properties name and country.

// Transform an object into an array.

const arr = [
  {
    firstName: "Joel",
    country: "United States",
  },
  {
    firstName: "John",
    country: "United States",
  },
];

const formatData = function (arr) {
  arr.forEach(function (obj) {
    const { firstName, country } = obj;
    let outputStr = `"${firstName} is from ${country}"`;
    return console.log(outputStr);
  });
};

formatData(arr);

// Challenge 3: Function Composition
// Write a function compose that takes two functions as arguments and returns a new function that is the composition of the two functions. The returned function should apply the second function to the result of the first function.
function fn1(a) {
  return (a *= 2);
}

function fn2(b) {
  return (b *= 2);
}

function bigOne(f1, f2) {
  return function (x) {
    return f2(f1(x));
  };
}
console.log(bigOne(fn1, fn2)(5));

bigOne(fn1, fn2);

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

const string = "the-stealth-warrior";

function cnvrtString(str) {
  let newStr = str.replace(/\-/g, " ").replace(/\_/g, " ").split(" ");
  let firstWord = newStr[0];
  console.log(newStr);
  for (let i = 1; i < newStr.length; i++) {
    firstWord += newStr[i][0].toUpperCase() + newStr[i].slice(1).toLowerCase();
  }
  return firstWord;
}
console.log(cnvrtString(string));
