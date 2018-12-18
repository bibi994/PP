// Write a function that finds all the elements in a given array less than a given element.
// 	Input: [2, 3, 8, -2, 11, 4], 6
// 	Output: [2, 3, -2, 4]

function lessOfElement(array, element) {
  var lessNumbers = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < element) {
      lessNumbers.push(array[i]);
    }
  }
  return lessNumbers;
}

console.log(lessOfElement([2, 3, 8, -2, 11, 4], 6));

//Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

function findsAllElements(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].indexOf("Pro") == 0 || array[i].indexOf("pro") == 0) {
      result.push(array[i]);
    }
    // console.log(index);
  }

  return result;
}
console.log(findsAllElements(["JavaScript", "Programming", "Pro", "product"]));


// Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 


function filterElements(array, )