// Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’ 
// Output: “Good morning” 


function insertCharacter(string, position, character) {

    array = string.split("");

    array.splice(position - 1, 0, character);

    string = array.join("");
    return string;

}

console.log(insertCharacter("Goo morning", 4, "d"));
