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
*/
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

const newArray = [...alphaArray];
newArray.toString().replaceAll(",", "");
// console.log(x);
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
