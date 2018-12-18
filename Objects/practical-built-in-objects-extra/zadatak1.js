/*
Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
*/

function dupEachElement(array) {
  var array2 = [];
  for (var i = 0; i < array.length; i++) {
    array2.push(array[i]);
    array2.push(array[i]);
  }
  return array2;
}
console.log(dupEachElement([1, 2, 3]));
