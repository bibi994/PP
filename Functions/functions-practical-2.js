// Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false

function string(a) {
  if (typeof a === "string") {
    return true;
  } else {
    return false;
  }
}
var b = string("marla");
console.log(b);

// Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function isEmptyString(a) {
  if (a === " ") {
    return true;
  } else {
    return false;
  }
}
var b = isEmptyString(" ");
console.log(b);

// Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function concatenates(s, a) {
  var i = 0;
  var newString = "";

  do {
    i++;
    newString += s;
  } while (i < a);

  return newString;
}
var b = concatenates("ha-", 4);
console.log(b);

// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function numberOfEmpty(a) {
  var cnt = 0;

  for (var i = 0; i < a.length; i++) {
    if (a[i] === " ") {
      cnt++;
    }
  }
  return cnt;
}
var b = numberOfEmpty("My random string");
console.log(b);

// Write a function to find the position of the first occurrence of a character in a string.The result should be in human numeration form.If there are no occurrences of the character, the function should return -1.

function counter2(a, b) {
  var i;
  var res = -1;

  for (i = 0; i < a.length; i++) {
    if (a[i] == b) {
      res = i + 1;
      break;
    }
  }
  return res;
}
var c = counter2("gojko", "z");
console.log(c);

// Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

function counter2(a, b) {
  var i;
  var res;

  for (i = a.length - 1; i < a.length; i--) {
    if (a[i] == b) {
      res = i + 1;
      break;
    }
  }
  return res;
}
var c = counter2("gojkos", "o");
console.log(c);

// Write a function to convert string into an array.
// Space in a string should be represented as “null” in new array.
// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

function convert(a) {
  var i;
  var newString = [];

  for (i = 0; i < a.length; i++) {
    if (a[i] !== " ") {
      newString[i] = a[i];
    } else {
      newString[i] = "Null";
    }
  }
  return newString;
}
var c = convert("My Random");
console.log(c);

// Write a function that accepts a number as a parameter and checks if the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function prime(n) {
  var i;
  var pri = true;

  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      pri = false;
      break;
    }
  }
  return pri;
}
var res = prime(7);
console.log(res);

// Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"

function replace(a, b) {
  var i;
  var newString = " ";

  for (i = 0; i < a.length; i++) {
    if (a[i] !== " ") {
      newString = newString + a[i];
    } else if (b == undefined) {
      newString = newString + "-";
    } else {
      newString = newString + b;
    }
  }
  return newString;
}
var rez;
rez = replace("My random string", "+");
console.log(rez);

// Write a function to get the first n characters and add “...” at the end of newly created string.

function firstN(a, b) {
  var i;
  newString = "";

  for (i = 0; i < a.length; i++) {
    if (i !== b) {
      newString = newString + a[i];
    } else {
      newString = newString + "...";
      break;
    }
  }
  return newString;
}

var res = firstN("Da li vo radi?", 4);
console.log(res);

// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

// function convert(a) {
//   var i, j;
//   var onlyNumbers = [];
//   var news = [];
//   var nan = [];

//   for (i = 0; i < a.length; i++) {
//     news[i] = parseFloat(a[i]);
//     nan = isNaN(news[i]);

//     if (nan == false) {
//       onlyNumbers[onlyNumbers.length] = news[i];
//     }
//   }
//   return onlyNumbers;
// }

// var res = convert(["1", "21", undefined, "42", "1e+3", Infinity]);
// console.log(res);

function convert(n) {
  var i;
  var novi = [];

  for (i = 0; i < n.length; i++) {
    if (n[i] / n[i] === 1) {
      novi[novi.length] = n[i] * 1;
    }
  }
  return novi;
}
var res = convert(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(res);

// Write a function to calculate how many years there are left until retirement based on the year of birth.
// Retirement for men is at age of 65 and for women at age of 60.
// If someone is already retired, a proper message should be displayed

function retirement(a, g) {
  var i;
  var res;
  var years;
  var ispis = "";

  years = 2018 - a;
  if (g == "m") {
    if (years < 65) {
      res = 65 - years;
      ispis = "Potrebno Vam je jos " + res + " godine/a do penzije.";
    } else {
      ispis = "Imate uslov za penziju.";
    }
  }
  if (g == "f") {
    if (years < 60) {
      res = 60 - years;
      ispis = "Potrebno Vam je jos " + res + " godine/a do penzije.";
    } else {
      ispis = "Imate uslov za penziju.";
    }
  }
  return ispis;
}
var unos = retirement("1950", "m");
console.log(unos);
