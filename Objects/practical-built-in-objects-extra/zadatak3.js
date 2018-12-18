// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

function numberofElements(array) {
  return array.length % 2 != 0;
}

console.log(numberofElements([1, 2, 9, 2, 1]));

// B) Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.

function numberLessOfMidle(array) {
  if ((array.length - 1) % 2 == 0) {
    var midlePosition = array[(array.length - 1) / 2];
  } else {
    return "Error";
  }
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < midlePosition) {
      counter++;
    }
  }
  return counter;
}

console.log(numberLessOfMidle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));
