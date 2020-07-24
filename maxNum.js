// Finding the maximum value out of three numbers
var a = 30;
var b = 25;
var c = 20;
if (a > b) {
    if (a > c) {
        console.log("a is bigger");
    } else {
        console.log("c is bigger");
    }
} else {
    if (b > c) {
        console.log("b is bigger");
    } else {
        console.log("c is bigger");
    }
}

// second way
var max = Math.max(a, b, c);
console.log(max);

// third way
var x = 50;
var y = 60;
var z = 70;
if (x > y && x > z) {
    console.log("x is bigger")
} else if (y > z) {
    console.log("y is bigger")
} else {
    console.log("z is bigger")
}