//type - string
//strenght - number
//sugar - number
//milk - boolean

//addSugar
//printInfo

function Coffee(type, strength, sugar, milk) {
  //var this = {};

  this.typeOfCoffee = type;
  this.coffeeStrength = strength;
  this.sugar = sugar;
  this.withMilek = milk;

  this.addSugar = function() {
    this.sgar++;
  };
  this.printInfo = function() {
    console.log("Our coffee is:" + this.typeOfCoffee);

    //1 or 2 --> weak
    //3 or 4-->regular
    //5 or 6 --> strong

    switch (this.coffeeStrength) {
      case 1:
      case 2:
        console.log("Weak coffee");
        break;
      case 3:
      case 4:
        console.log("Regular coffee.");
        break;
      case 5:
      case 6:
        console.log("Strong coffee.");
        break;
    }
    //>2 sweet coffee

    if (this.sugar > 2) {
      console.log("Super sweet coffee");
    } else {
      console.log("Not so sweet coffee.");
    }
    var milkMessage;
    milkMessage = this.withMilk == true ? "with milk" : "without milk";
    console.log(milkMessage);
  };
}

var ourCoffee = new Coffee("mocha", 6, 1, true);
ourCoffee.printInfo();
ourCoffee.addSugar();
ourCoffee.addSugar();
ourCoffee.printInfo();

console.log(ourCoffee);

//********************************
//Algoritam sortiranja!!!!!!!!!!**
//********************************
var array = [3, 5, 111, 12, 15, 72, 16, 90, 8989];
array.sort(function(a, b) {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  if (a == b) {
    return 0;
  }
});
console.log(array);

//***********************************
//***********************************

//1. Write a function to convert a number from one base (radix) to another.
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

// 'ff', 16, 8 -> 377

// 2. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

// 	12345 -> 54321

var str = "12345";

var strReverse = str
  .split("")
  .reverse()
  .join("");

var result = parseInt(strReverse);

console.log(typeof result);

//3. Write a JavaScript function that returns a passed string with letters in alphabetical order.
//Note: Assume punctuation, numbers and symbols are not included in the passed string.

//“Webmaster” -> “abeemrstw”

function alphabet_order(str) {
  return str
    .split("")
    .sort()
    .join("");
}
console.log(alphabet_order("webmaster"));

//4.Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

//"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

function alphaArray(str) {
  var newString = str.split(" ");
  for (var i = 0; i < newString.length; i++) {
    newString[i] = newString[i]
      .split("")
      .sort()
      .join("");
  }

  return newString.join(" ");
}
console.log(alphaArray("Republic Of Serbia"));

//5. Write a function to split a string and convert it into an array of words.

// "John Snow" -> [ 'John', 'Snow' ]

var str = "John Snow";

var newArray = [];
newArray = str.split(" ");

console.log(newArray);

//6. Write a function to convert a string to its abbreviated form.

//"John Snow" -> 	"John S."

var str = "John Snow";
var newString = str.split(" ");
var newLastName = newString[newString.length - 1].slice(0, 1) + ".";
var result = newString[0] + " " + newLastName;
console.log(result);

//7.  Write a function that can pad (left, right) a string to get to a determined length.

//'0000', 123, 'l' -> 0123
//'00000000', 123, 'r' -> 12300000

function pad(number, number2, position) {
  var newPad = [];
}

console.log(str);

//8.  Write a function to capitalize the first letter of a string and returns modified string.

//"js string exercises" -> "Js string exercises"

function firstChar(string) {
  var array = [];
  array = string.split("");
  array[0] = array[0].toUpperCase();
  array = array.join("");

  return array;
}
var result = firstChar("js string exercises");
console.log(result);

//9.  Write a function to hide email addresses to protect them from unauthorized users.

//"somerandomaddress@example.com" -> "somerand...@example.com"

function hideEmail(email) {
  var position = email.indexOf("@");
  var lastPosition = email.slice(position);
  var firstPosition = email.slice(0, email.length - position - 4) + "...";

  var final = firstPosition + lastPosition;

  return final;
}

var result = hideEmail("somerandomaddress@example.com");
console.log(result);
