// Write a function that checks if a given object has a given property with the given value. 
// Input: {x: 20, y: 30}, “x”, 20 
// Output: true

// Input: {x: 20, y: 30}, “z”, 20 
// Output: false 


function checkObject(object, property, value) {

    if (object.hasOwnProperty(property)) {
        return object[property] == value;
    }

}

console.log(checkObject({ x: 20, y: 30 }, "x", 30))