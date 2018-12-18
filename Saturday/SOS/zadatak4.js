// Write a function that deletes a character from the given position in the string. 
// Input: “Goodd morning!”, 3 
// Output: “Good morning!” 


function deleteCharacter(string, position) {

    array = string.split("");

    array.splice(position + 1, 1);

    string = array.join("");
    return string;

}

console.log(deleteCharacter("Goodd morning!", 3));