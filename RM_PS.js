//Write a function that returns the sum of two integers.
var solveMeFirst = function (a, b) {
  return a + b;
};

//Write a function that returns the product of two numbers.
var multiply = function (a, b) {
  return a * b;
};

//Write a function that returns "Even" when a number is even and "Odd" when it is odd.
var evenOrOdd = function (num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

//Return the negative value of a number. If it is already negative, keep it negative.
var makeNegative = function (num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
};

//Return the opposite of a given number.
var opposite = function (num) {
  return -num;
};

//Return the sum of all integers in an array.
var simpleArraySum = function (ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
};

//Return true if it is not a weekday or you are on vacation.
var sleepIn = function (weekday, vacation) {
  return !weekday || vacation;
};

//Two monkeys are in trouble if both are smiling or neither is smiling. Return true in that case.
var monkeyTrouble = function (aSmile, bSmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile);
};

//Return the sum of two integers, but return double the sum when they are equal.
var sumDouble = function (a, b) {
  if (a === b) {
    return 2 * (a + b);
  } else {
    return a + b;
  }
};

//Return the absolute difference between n and 21, doubling it when n is greater than 21.
var diff21 = function (n) {
  if (n <= 21) {
    return 21 - n;
  } else {
    return 2 * (n - 21);
  }
};
