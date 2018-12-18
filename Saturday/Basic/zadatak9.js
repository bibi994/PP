// Write a function that replaces all white spaces with dash(-)

function replaceWhithWithDash(input) {

    var i;
    replaced = "";

    for (i = 0; i < input.length; i++) {
        if (input[i] !== " ") {
            replaced += input[i];
        } else {
            replaced += "-"
        }
    }
    return replaced;
}

console.log(replaceWhithWithDash("Da li ovo radi?"));