// Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insert(a, b, c) {
  var i;

  var newString = "";

  for (i = 0; i < a.length; i++) {
    if (i == c) {
      newString = newString + " " + b + "" + a[i];
    } else {
      newString = newString + a[i];
    }
  }
  for (i = 0; i < a.length; i++) {
    if (c == undefined) {
      newString = b + " " + newString;
      break;
    }
  }
  return newString;
}

var b = insert("My random string", "JS");
console.log(b);

// Write a program to join all elements of the array into a string skipping elements that are undefined,
// null, NaN or Infinity.
// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function join(a) {
  var result = "";
  for (var i = 0; i < a.length; i++) {
    var nan = parseFloat(a[i]);
    if (!(isNaN(nan) == true || nan == 0)) {
      result = result + a[i] + ",";
    }
  }
  return result;
}
var final = join([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log(final);
// problem zarezi

// Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function join(a) {
  var result = [];
  for (var i = 0; i < a.length; i++) {
    var nan = parseFloat(a[i]);
    if (!(isNaN(nan) == true || nan == 0)) {
      result[result.length] = a[i];
    }
  }
  return result;
}
var final = join([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log(final);

// Write a function that reverses a number. The result must be a number.

// 12345 -> 54321  Output must be a number

function reverse(num) {
  var i;
  var counter = "";

  for (i = num.length - 1; i >= 0; i--) {
    counter = counter + num[i];
  }
  counter = parseFloat(counter);
  return counter;
}
var res = reverse("12345");
console.log(res);

//  5. Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]

function reverse(num, n) {
  var i;
  var counter = [];
  if (n == undefined) {
    n = 1;
  }

  for (i = num.length - n; i < num.length; i++) {
    // for (i = num.length - 1; i >= num.length - n; i--) {
    // if (i == ) {
    counter[counter.length] = num[i];
    // }
  }

  return counter;
}
var res = reverse([7, 9, 0, -2], 4);
console.log(res);

// 6. Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]

function preFilled(a, b) {
  var i;
  var array = [];

  if (b == undefined) {
    b = null;
  }

  for (i = 0; i < a; i++) {
    array[i] = b;
  }
  return array;
}
var res = preFilled(2);
console.log(res);

// 7. Write a function that says whether a number is perfect.
// 28 -> 28 is a perfect number.

function perfect(n) {
  var i;
  var sum = 0;
  var check = "";

  for (i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
      sum = sum + i;
    }
  }
  if (sum == n) {
    check = n + " je savrsen broj.";
  } else {
    check = n + " nije savrsen broj.";
  }
  return check;
}

var res = perfect(496);
console.log(res);

// 8. Write a function to find a word within a string.
// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"

function search(a, b) {
  var i, j;
  var cnt = 0;

  for (i = 0; i < a.length; i++) {
    if (a[i] == b[0]) {
      var flag = true;
      for (j = 0; j < b.length; j++) {
        if (a[i + j] != b[j]) {
          flag = false;
          break;
        }
      }
      if (flag == true) {
        cnt++;
      }
    }
  }
  return cnt;
}
var res = search("The fox quick brown fox", "fox");
console.log(res);

//9.  Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"

function hide(a) {
  var i;
  var novi = "";
  var novi2 = "";

  for (i = a.length - 1; i >= 0; i--) {
    if (a[i] != "@") {
      novi = novi + a[i];
    } else {
      novi = novi + "@...";
      i = i - 7;
    }
  }
  for (i = novi.length - 1; i >= 0; i--) {
    novi2 = novi2 + novi[i];
  }
  return novi2;
}
var res = hide("djuretanovic@bgit.rs");
console.log(res);

// Write a program to find the most frequent item of an array.
// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function mostfreq(a) {
  var i;
  var cnt = 0;
  var max_n = 0;
  var max_broj = 0;

  for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length; j++) {
      if (a[i] == a[j]) {
        cnt++;
      }
    }
    
    if (cnt > max_broj) {
      max_n = a[i];
      max_broj = cnt;
      
    }
    cnt = 0;
  }
  return max_n;
}
var res = mostfreq([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);
console.log(res);
