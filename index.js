// console.log("Hello, World!");

// 1. Build a vault that requires three (3) mathmematical calculations to generate the three codes in a combination - 10 - 40 -39.
// 2. Use the JavaScript console to create three variables, each variable will be the result of each calculation.
// 3. The combination of the lock is 10 - 40 - 39.
// 4. You must three different arithmetic operators that will generate each individual number
// Display the combination in an alert popup.

// 5 * 2 = 10,, the first number in the combination
const code1 = 5 * 2;
console.log(code1);
// 20 + 20 = 40 the second number in the combination
const code2 = 20 + 20;
console.log(code2);
// 78 - 39 = 39 the third number in the combination
const code3 = 78 - 39;
console.log(code3);

alert(
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
);

alert(`The combination is ${code1} - ${code2} - ${code3}`);
