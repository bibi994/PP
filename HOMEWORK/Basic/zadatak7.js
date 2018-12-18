// Write a function that prints out number of input arguments of the function.


function numberOfInput() {
    var i;
    var counter = 0;

    for (i = 0; i < arguments.length - 1; i++) {
        counter++;
    }
    return counter + 1;
}

console.log(numberOfInput("3", "4", "5", "asd", "bit", 9, 2));