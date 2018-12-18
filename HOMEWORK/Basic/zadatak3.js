// Write a function that outputs array of every second character  from the provided string. In case that string is not provided outputs array empty array. 

function secondCharacter(string) {
    var i;
    var j;

    array = [];

    if (string !== " ") {
        for (i = 0, j = 0; i <= string.length; i += + 4, j++) {
            if (string[i] !== ",") {
                array[j] = string[i];
            }

        }
    } else {
        array = [];
    }

    return array;
}

console.log(secondCharacter("1,2,3,4,5,6,7,8,9"));