function plusOrMinus(number) {

    var result = " ";

    if (number > 0) {
        result = "Number is positive.";

    } else if (number < 0) {
        result = "Number is negative.";
    } else {
        result = "Number is 0.";
    }
    return result;
}


console.log(plusOrMinus(0));