function allNumbers(firtsNumber, secondNumber) {

    var result = " "

    for (var i = firtsNumber + 1; i < secondNumber; i++) {

        result = result + " " + i;
    }
    return result;

}

console.log(allNumbers(3, 10));
