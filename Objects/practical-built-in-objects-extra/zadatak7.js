// a. Write a function that checks if a given string is written in all capitals.
// b. Write a function that checks if a given string contains any digits.
// c. Write a function that checks if a given string is a valid hexadecimal color.
// d. Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
// e. Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function checkCapitals (string) {
    return string.toUpperCase() === string;
}


function checkdigits (string) {
    string.split();
    return string;
}

+
console.log(checkCapitals("asdf"));
console.log(checkdigits("asdf1"));