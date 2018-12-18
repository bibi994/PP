// Write a function that checks if the first and the last element in the array or string are the same.

function checksFirstAndlast(array) {
    var i;
    result = false

    if (array[0] == array[array.length - 1]) {
        result = true
    }
    return result;

}
console.log(checksFirstAndlast("1, 4, 5, 6, 7, 8, 1"));