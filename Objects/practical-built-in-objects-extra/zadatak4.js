//Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.

function copyArray(array) {
  var array2 = [];
  for (var i = 0; i < array.length; i++) {
    array2[i] = array[i];
  }
  return array2;
}

function findMinValueAndIndex(array) {
  var copy = copyArray(array);

  array.sort(function(a, b) {
    return a - b;
  });
  var minValue = array[0];
  var indexPosition = copy.lastIndexOf(minValue);
  var numberObj = {
    minValue: minValue,
    minLastIndex: indexPosition
  };
  return numberObj;
}
console.log(findMinValueAndIndex([1, 4, -2, 11, 8, 1, -2, 3]));
