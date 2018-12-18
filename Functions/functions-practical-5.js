// Find the min and max element in the following array and switch their places.
// Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

function minAndMax(a) {
  var i;
  var min = +Infinity;
  var max = -Infinity;
  var minp;
  var maxp;
  var tmp;
  var novi = [];

  for (i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
      minp = i;
    } else if (a[i] > max) {
      max = a[i];
      maxp = i;
    }
  }
  for (i = 0; i < a.length; i++) {
    if (i == minp) {
      novi[i] = max;
    } else if (i == maxp) {
      novi[i] = min;
    } else {
      novi[i] = a[i];
    }
  }
  return novi;
}

var res = minAndMax([3, 500, 12, 149, 53, 414, 1, 19]);
console.log(res);

// Use the following array to make a new one by dividing its values by two and adding 5.
// If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function add5(a) {
  var i;
  novi = [];

  for (i = 0; i < a.length; i++) {
    if (a[i] / 2 + 5 != 0) {
      novi[i] = a[i] / 2 + 5;
    } else {
      novi[i] = 20;
    }
  }
  return novi;
}

var res = add5([3, 500, -10, 149, 53, 414, 1, 19]);
console.log(res);

// Initialize two arrays. The first one should contain student names, the second one the number of points for each student.
// Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input:
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

function ranges(a, b) {
  var i, j;
  var res = "";

  for (i = 0, j = 0; i < a.length; i++, j++) {
    if (b[i] <= 50) {
      res =
        res +
        "\n" +
        a[i] +
        " acquired " +
        b[i] +
        " and failed to complete the exam.";
    } else if (b[i] > 51 && b[j] < 60) {
      res = res + "\n" + a[i] + " acquired " + b[i] + " points and earned 6.";
    } else if (b[i] > 61 && b[j] < 70) {
      res = res + "\n" + a[i] + " acquired " + b[i] + " points and earned 7.";
    } else if (b[i] > 71 && b[j] < 80) {
      res = res + "\n" + a[i] + " acquired " + b[i] + " points and earned 8.";
    } else if (b[i] > 81 && b[j] < 90) {
      res = res + "\n" + a[i] + " acquired " + b[i] + " points and earned 9.";
    } else if (b[i] > 91 && b[j] < 100) {
      res = res + "\n" + a[i] + " acquired " + b[j] + " points and earned 10.";
    }
  }
  return res;
}

var res2 = ranges(
  ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
  [50, 39, 63, 72, 99, 51, 83, 59]
);
console.log(res2);

// Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum.
// The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000

function calculat() {
  var i;
  var even = 0;
  var odd = 0;
  var res = 0;

  for (i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
      even = even + i;
    }
  }
  for (i = 1; i <= 500; i++) {
    if (i % 2 != 0) {
      odd = odd + i;
    }
  }
  res = (even - odd) * 12.5;
  return res;
}
var res2 = calculat();
console.log(res2);

// Define a 10 element array. Take the first two letters from every string (that has at least 2 letters)
// in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
// Output: AnStJoJoDaMa

function newSting(a) {
  var i;
  var novi = "";

  for (i = 0; i < a.length; i++) {
    if (a[i].length >= 2) {
      novi = novi + a[i][0] + a[i][1];
    }
  }
  return novi;
}

var res = newSting([
  "M",
  "Anne",
  12,
  "Steve",
  "Joe",
  "John",
  "David",
  "Mark",
  true,
  "A"
]);
console.log(res);

// Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

function reversed(a) {
  var i;
  novi = "";

  for (i = a.length - 1; i >= 0; i--) {
    novi = novi + a[i];
  }
  return novi;
}
var res = reversed("Belgrade Institute of Technology");
console.log(res);

// Write a program that displays all the combinations of two numbers between 1 and 7.
// Don't display two of the same numbers at the same time. Display the number of possible combinations,
// as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

function combinations() {
  var i;
  var tmp = 0;
  var res = "";

  for (i = 1; i <= 7; i++) {
    for ( j = 1; j <= 7; j++) {
      if (i !== j) {
        res = res + "(" + i + "," +j+ "),";
      }

    }
  }
  res = res.slice(0, -1);
  return res;
}
var res2 = combinations();
console.log(res2);

// Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false

function prime(number) {
  for (var i = 2; i < number / 2; i++) {
    if (number % i === 0) {
      res = "False";
      break;
    } else {
      res = "True";
    }
  }
  return res;
}

console.log(prime(15));

// Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true

function palindrome(a) {
  var noSpace = "";
  var i;
  var res;

  for (i = 0; i < a.length; i++) {
    if (a[i] !== " ") {
      noSpace += a[i];
    }
  }

  for (i = 0; i < noSpace.length / 2; i++) {
    if (a[i] !== a[a.length - i - 1]) {
      res = false;
      break;
    } else {
      res = true;
    }
  }

  return res;
}

var res2 = palindrome("abccga");
console.log(res2);


// Write a program that calculates the greatest common divisor of two integers. 
// Note: The greatest common divisor of two non-zero integers is the greatest positive number 
// that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9



function common(a, b) {
  var i;
  var cnt = 1;

  for (i = 1; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      cnt = i;
    }
  }
  return cnt;
}
var res = common(192, 42);
console.log(res);
