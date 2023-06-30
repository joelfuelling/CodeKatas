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
