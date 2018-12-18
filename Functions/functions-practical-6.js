//1 Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
// Vowels are a, e, i, o, and u as well as A, E, I, O, and U.

var sum = function(a) {
  var i;
  var cnt = 0;

  for (i = 0; i < a.length; i++) {
    switch (a[i]) {
      case "a":
        cnt++;
        break;
      case "e":
        cnt++;
        break;
      case "i":
        cnt++;
        break;
      case "o":
        cnt++;
        break;
      case "u":
        cnt++;
        break;
    }
  }
  return cnt;
};
console.log(sum("milosdjuretanovic"));

//2 Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

var twoArrays = function(a, b) {
  var i;
  var j = 0;
  var newArray = [];

  for (i = 0; i < a.length; i++) {
    newArray[j++] = a[i];
    newArray[j++] = b[i];
  }
  return newArray;
};

console.log(twoArrays(["a", "b", "c"], [1, 2, 3]));

//3 Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

var rotate = function(a, k) {
  var i = 0;
  var j = 0;
  var Arr1 = [];

  for (i = k; i < a.length; i++) {
    Arr1[j] = a[i];
    j++;
  }
  for (i = 0; i < k; i++) {
    Arr1[j] = a[i];
    j++;
  }
  return Arr1;
};

console.log(rotate([1, 2, 3, 4, 5, 6], 2));

//4 Write a function that takes a number and returns array of its digits.

var array = function(a) {
  var i;

  var newString = "";
  newString += a;
  var finalString = [];

  for (i = 0; i < newString.length; i++) {
    finalString[i] = newString[i];
  }

  return finalString;
};

console.log(array(515469));

//5 Write a program that prints a multiplication table for numbers up to 12.

var multiTable = function() {
  var i;
  var j;
  var result = "";

  for (i = 1; i <= 12; i++) {
    for (j = 1; j <= 12; j++) {
      console.log(i + " * " + j + " = " + i * j);
    }
  }
  return;
};

console.log(multiTable());

//6 Write a function to input temperature in Centigrade and convert to Fahrenheit.

var celsius = function(a) {
  var fa = (a * 9) / 5 + 32;

  return fa;
};
console.log(celsius(5));

//7 Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

var maxEl = function(a) {
  var i;
  var max = -Infinity;

  for (i = 0; i < a.length; i++) {
    if (a[i] / a[i] === 1 && typeof a[i] !== "string") {
      if (a[i] > max) {
        max = a[i];
      }
    }
  }
  return max;
};
console.log(maxEl(["4", NaN, 68, undefined, 5, 6, "75", false]));

//8 Write a function to find the maximum and minimum elements. Function returns an array.

var maxAndMin = function(a) {
  var i;
  var max = -Infinity;
  var min = Infinity;
  var newArray;

  for (i = 0; i < a.length; i++) {
    if (a[i] / a[i] === 1 && typeof a[i] !== "string") {
      if (a[i] > max) {
        max = a[i];
      }

      if (a[i] < min) {
        min = a[i];
      }
    }
    newArray = [max, min];
  }
  return newArray;
};
console.log(maxAndMin(["4", NaN, 68, undefined, -1, 6, "75", false, 124]));

//9 Write a function to find the median element of array.

var median = function(a) {
  var i;
  var milos;

  if (a.length % 2 == 0) {
    milos = (a[a.length / 2] + a[a.length / 2 - 1]) / 2;
  } else {
    milos = a[(a.length - 1) / 2];
  }
  return milos;
};

console.log(median([1, 2, 3, 4, 5, 6, 7]));

// 10 Write a function to find the element that occurs most frequently.

var mostFrequently = function(element) {
  numberOfOccurs = 0;
  max = 0;

  for (var i = 0; i < element.length; i++) {
    for (var j = 0; j < element.length; j++) {
      if (element[i] == element[j]) {
        numberOfOccurs++;
      }
    }
    if (numberOfOccurs > max) {
      max = element[i];
      numberOfOccurs = 0;
    }
  }
  return max;
};

console.log(mostFrequently("ajde aaaa sasssssss"));

// // 11. Write a function to find and return the first, middle and last element of an array if the array has odd number of elements.
// If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

var positionInArray = function(array) {
  var first = [];
  var middle = [];
  var last = [];
  var newArray = [];

  if (array[0] == undefined) {
    return newArray;
  }
  if (array.length % 2 !== 0) {
    newArray[0] = array[0];
    newArray[1] = array[(array.length - 1) / 2];
    newArray[2] = array[array.length - 1];
  } else {
    newArray[0] = array[0];
    newArray[1] = array[array.length - 1];
  }

  return newArray;
};

console.log(positionInArray([2, 4, 6, 8, 3, 5]));

//12. Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

var averageOfElements = function(arguments) {
  var i;
  var sum = 0;
  var average = 0;

  for (i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  average = sum / arguments.length;

  return average;
};

console.log(averageOfElements([1, 2, 3, 4, 5, 6]));

// 13. Write a function to find all the numbers greater than the average.

var greaterOfAverage = function(numbers) {
  var i;
  var average = 0;
  var sum = 0;
  var greaterArray = [];

  for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  average = sum / numbers.length;

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > average) {
      greaterArray[greaterArray.length] = numbers[i];
    }
  }
  return greaterArray;
};

console.log(greaterOfAverage([2, 2, 2, 3]));

// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40

var bodyMassIndex = function(weight, height) {
  var bmi;
  var result;

  bmi = weight / (height * height);

  if (bmi < 15) {
    result = "Starvation";
  }
  if (bmi < 17.5) {
    result = "Anorexic";
  }
  if (bmi < 18.5) {
    result = "Underweight";
  }
  if (bmi >= 18.5 && bmi < 25) {
    result = "Ideal";
  }
  if (bmi >= 25 && bmi < 30) {
    result = "Overweight";
  }
  if (bmi >= 30 && bmi < 40) {
    result = "Obese";
  }
  if (bmi >= 40) {
    result = "Morbidly obese";
  }
  return result;
};
console.log(bodyMassIndex(60, 1.8));

// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

var printString = function(array) {
  var i, j;
  var maxLetters = array[0].length;
  var newString = "";
  var numberOfEmpty = 0;

  for (i = 1; i < array.length; i++) {
    if (array[i].length > maxLetters) {
      maxLetters = array[i].length;
    }
  }

  for (i = -1; i <= array.length; i++) {
    if (i == -1 || i == array.length) {
      for (j = 0; j < maxLetters + 4; j++) {
        newString = newString + "*";
      }
    } else {
      numberOfEmpty = maxLetters - array[i].length;
      newString = newString + "* " + array[i];

      for (j = 0; j < numberOfEmpty; j++) {
        newString = newString + " ";
      }
      newString = newString + " *";
    }
    newString = newString + "\n";
  }
  return newString;
};
console.log(printString(["Hello", "World", "in", "a", "frame"]));
