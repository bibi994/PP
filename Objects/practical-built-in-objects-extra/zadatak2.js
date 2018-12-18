//Write a functional expression that removes all duplicates in a given array.
function removeDuplicates(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  var array2 = [];
  for (var i = 0, j = 1; i < array.length; i++, j++) {
    //console.log(i);
    if (array[i] != array[j]) {
      array2.push(array[i]);
    }
  }
  return array2;
}

console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));
