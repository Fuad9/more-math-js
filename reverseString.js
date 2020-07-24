function reverseString(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "I love my country";
var output = reverseString(statement);
console.log(output);

// second way 
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("I am a good boy"));

// third way
function reverseString(str) {
    var newString = "";
    for (i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i];
    }
    return newString;
}
console.log(reverseString("The girl is very beatiful"));