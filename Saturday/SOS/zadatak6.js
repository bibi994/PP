// Write a function that replaces the elements of the given array between two positions with their doubled values. 
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

function doubleValues(array, firstPosition, lastPosition) {

    for (var i = 0; i < array.length; i++) {
        if (i >= firstPosition && i <= lastPosition) {
            array[i] = array[i] * 2;
        }
    }


    return array;
}

console.log(doubleValues([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));