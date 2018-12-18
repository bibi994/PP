function sum(a, b) {
    // a = 11, b = 84

    var result;
    result = a + b;

    return result;
}

var final_result;
final_result = sum(11, 84)

console.log(final_result);

// 

function sum_of_all_arguments() {
    var result = 0;
    var i;

    for (i = 0; i < arguments.length; i++) {
        result = result + arguments[i];

    }
    return result;
}
var s;
s = sum_of_all_arguments(3, 6, 7, 4, 5);
console.log(s);

// ***************************************************************************************
// ***************************************************************************************



// Write a program that calculates the maximum of two given numbers. 

function max(a, b) {
    var result;
    if (a > b) {
        result = a;
    } else {
        result = b;
    }
    return result;
}

var maxResult = max(11, 10);

console.log(maxResult);



// Write a program that checks if a given number is odd.


function isOdd(a) {
    var result;
    if (a % 2 !== 0) {
        result = a + " is odd";
    } else {
        result = a + " isn't odd";
    }
    return result;
}

var b = isOdd(12);

console.log(b);


// Write a program that checks if a given number is a three digit long number.

function check(a) {
    var result;
    if (a > 99 && a < 1000) {
        result = a + " jeste trocifren broj.";
    } else {
        result = a + " nije trocifren broj.";
    }
    return result;
}
var b = check(2);
console.log(b);



// Write a program that calculates an arithmetic mean of four numbers.

function arithmetic(a, b, c, d) {
    var sum;
    sum = a + b + c + d
    return sum / 4
}

var a = arithmetic(4, 5, 4, 4);

console.log(a);

// varijanta 2


function arithmetic() {
    var sum = 0;
    var i;
    var art = arguments.length;

    for (i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }

    return sum / art;
}

var a = arithmetic(4, 5, 4, 4, 6, 7, 8);

console.log(a);


// Write a program that calculates a number of digits of a given number. 

function numOfDigits(a) {
    var string = "";
    string = string + a;
    var counter = string.length;
    return counter;

}

var b = numOfDigits(5100);

console.log(b);




// Write a program that calculates a number of appearances of a given number in a given array.
// var a = [2, 4, 7, 8, 7, 7, 1];
// var e = 7;
// result: 3

function appearances(e) {
    var i;
    var a = [2, 4, 7, 4, 7, 7, 1];
    var cnt = 0;


    for (i = 0; i < a.length; i++) {
        if (a[i] == e) {
            cnt++;
        }
    }
    return cnt;
}
var g = appearances(4);
console.log(g);


// Varijacija dva

function appearances(e) {
    var i;
    var cnt = 0;

    for (i = 1; i < arguments.length; i++) {
        if (arguments[i] == e) {
            cnt++;
        }
    }
    return cnt;
}
var g = appearances(4, 2, 4, 4);
console.log(g);





// Write a program that calculates the sum of odd elements of a given array. 

function sumOfOdd() {
    var i;
    var sum = 0;

    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 !== 0) {
            sum = sum + arguments[i];
        }
    }
    return sum;
}
var b = sumOfOdd(4, 5, 6, 7, 8);
console.log(b);




// Write a program that calculates the number of appearances of a letter a in a given string. 

function count_aInString(a) {
    var i;
    var counter = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] == "a") {
            counter++;
        }
    }
    return counter;
}

var b = count_aInString("marla");
console.log(b);


//Modify the program so it calculates the number of both letters a and A.


function count_aInString(a) {
    var i;
    var newString = "";

    for (i = 0; i < a.length; i++) {
        if (a[i] == "a") {
            newString += "A";
        }
        else {
            newString += a[i];
        }
    }
    return newString;
}

var b = count_aInString("marla");
console.log(b);





// Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 


function concatenates(a, s) {
    var i;
    var newString = "";

    for (i = 0; i < a; i++) {
        newString = newString + s;
    }
    return newString;
}
var b = concatenates(4, "marla");
console.log(b);