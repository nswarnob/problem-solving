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

//Return true when a talking parrot is causing trouble outside the allowed hours of 7 through 20.
var parrotTrouble = function (talking, hour) {
  return talking && (hour < 7 || hour > 20);
};

//Return true if either number is 10 or their sum is 10.
var makes10 = function (a, b) {
  return a === 10 || b === 10 || a + b === 10;
};

//Return true if n is within 10 of 100 or within 10 of 200.
var nearHundred = function (n) {
  return Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10;
};

//Return true when one number is positive and the other is negative. If negative is true, both must be negative.
var posNeg = function (a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  }

  return (a < 0 && b > 0) || (a > 0 && b < 0);
};

//Add "not " to the beginning of a string unless it already starts with "not".
var notString = function (str) {
  if (str.startsWith("not")) {
    return str;
  }

  return "not " + str;
};

//Compare two three-element score arrays and return how many points each person earns.
var compareTriplets = function (a, b) {
  let alice = 0;
  let bob = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
  }

  return [alice, bob];
};

//Return the sum of all values in an integer array.
var aVeryBigSum = function (ar) {
  return ar.reduce((sum, num) => sum + num, 0);
};

//Create a right-aligned staircase of height n using # characters.
var staircase = function (n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    result += " ".repeat(n - i) + "#".repeat(i);

    if (i < n) {
      result += "\n";
    }
  }

  return result;
};

//Round a grade up to the next multiple of 5 when it is close enough; keep grades below 38 unchanged.
var gradingStudents = function (grades) {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }

    let nextMultiple = Math.ceil(grade / 5) * 5;

    if (nextMultiple - grade < 3) {
      return nextMultiple;
    }

    return grade;
  });
};

//Convert a 12-hour AM/PM time string into 24-hour format.
var timeConversion = function (s) {
  let period = s.slice(-2);
  let time = s.slice(0, -2);
  let hour = Number(time.slice(0, 2));

  if (period === "AM" && hour === 12) {
    hour = 0;
  } else if (period === "PM" && hour !== 12) {
    hour += 12;
  }

  return String(hour).padStart(2, "0") + time.slice(2);
};

//Return a string repeated exactly n times.
var repeatStr = function (n, s) {
  return s.repeat(n);
};

//Return the given string with its characters in reverse order.
var solution = function (str) {
  return str.split("").reverse().join("");
};

//Return the sum of all positive numbers in an array. Return 0 if there are none.
var positiveSum = function (arr) {
  return arr.reduce((sum, num) => {
    return num > 0 ? sum + num : sum;
  }, 0);
};

//Return the sum of all integers from 1 through n.
var summation = function (num) {
  return (num * (num + 1)) / 2;
};

//Convert a boolean value into the string "true" or "false".
var booleanToString = function (b) {
  return String(b);
};
