// let value;

// function istruthy(para) {
//   if (para) {
//     return true;
//   } else if (para === false) {
//     return "The boolean value false is falsy";
//   } else if (para === null) {
//     return "The null value is falsy";
//   } else if (para === undefined) {
//     return "Undefined is falsy";
//   } else if (para === 0) {
//     return "The number 0 is falsy (the only falsy number)";
//   } else {
//     return "The empty string is falsy";
//   }
// }
// console.log(istruthy(""));

// function numTest(num1, num2) {
//   let sum = num1 + num2;
//   if (sum < -1000) {
//     return sum + " is less than -1000";
//   } else if (sum < 0) {
//     return sum + " is a negative number";
//   } else if (sum === 0) {
//     return sum + "is equal to 0";
//   } else if (sum > 100) {
//     return sum + " is greater than 100";
//   } else if (sum > 0) {
//     return sum + " is greater than 0";
//   }
// }
// console.log(numTest(14, 82));

// function grtThan5(num1, num2) {
//   if (num1 && num2 >= 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(grtThan5(5, 6));
// console.log(grtThan5(10, 11));
// console.log(grtThan5(0, 0));
// console.log(grtThan5(1000, -1000));
// console.log(grtThan5(6, 4));
// console.log(grtThan5(5, 5));

function truthy(param1A, param1B, param2A, param2B) {
  if (param1A === param1B || param2A === param2B) {
    return true;
  } else {
    return false;
  }
}

console.log(truthy("cat", "cat", 6, "6"));
console.log(truthy("five", 5, "dog", "dawg"));
console.log(truthy(0, false, "horse", "horse"));
console.log(truthy("eight", "eight", "four", "for"));
console.log(truthy(11, "eleven", "four", "for"));
console.log(truthy("cake", "cake", "pie", "pie"));
