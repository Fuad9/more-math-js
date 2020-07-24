var count = 0;

function countChar(speech) {
    for (var i = 0; i < speech.length; i++) {
        var char = speech[i];
        if (char == ".") {
            count++;
        }
    }
    return count;
}
count++;
var speech = "I am a good boy. I love programming. I love javascript";
var output = countChar(speech);
console.log(output);