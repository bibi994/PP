// Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]

// Input: [3, 1, 8, 90, -4, 23, 1, 67]


// Output: [3, 1, 90, 23, 67]


function deleteSecondCharacter(array) {
    for (var i = 1; i < array.length; i += 1) {
        array.splice(i, 1);

    }
    return array;
}

console.log(deleteSecondCharacter([3, 5, 1, 8, 90, -4, 23, 1, 67]));
