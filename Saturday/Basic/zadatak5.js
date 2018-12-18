// Write a function that checks if the two arrays are equal.

function equal(array1, array2) {
    var i;
    result = true;

    for (i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            result = false;
        }
    }
    return result;
}

console.log(equal([1, 2, 3, 4], [1, 2, 3, 4]));