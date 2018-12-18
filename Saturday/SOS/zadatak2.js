// Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”


function replaceJs(string) {

    string = string.split("JS");
    string = string.join("**");
    return string

}
console.log(replaceJs("Programming in JS is super interesting!"));
