// Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
// Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]

function sortWordsInString(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].indexOf('a') == -1) {
            newArray.push(array[i]);
        }
        for (var i = 0; i < array.length; i++) {
            if (array[i].indexOf('a') == 0) {
                newArray.push(array[i]);
            }
        }
        for (var i = 0; i < array.length; i++) {
            if (array[i].indexOf('a') == array.length - 1) {
                newArray.push(array[i]);
            }
        }

    }
    return newArray;
}

console.log(sortWordsInString(['apple', 'tea', 'amazing', 'morning', 'JavaScript']));