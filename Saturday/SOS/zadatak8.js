// Write a function that checks if every element of the first array is contained in the second array.Be careful with repetitions! 
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

var array1 = [3, 4, 1, 3];
var array2 = [8, 9, 3, 1, 11, 4, 3];

function checkEveryElements(array1, array2) {

    function check(value) {
        return (array2.indexOf(value) != -1);
    }

    result = array1.every(check);
    return result;
}



console.log(checkEveryElements(array1, array2));


