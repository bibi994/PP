// Write a function that reverses a word or sentence. Cover cases if sentence is not provided

function reverses(word) {
    var i;
    var result = "";

    for (i = word.length - 1; i >= 0; i--) {
        result = result + word[i];
    }
    return result;
}

console.log(reverses("test"));