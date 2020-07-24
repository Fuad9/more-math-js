var a = 10;
var b = 30;
var temp = a;
a = b;
b = temp;
console.log("after swap: a=", a, "b=", b);

// second way
var x = 15;
var y = 20;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x=", x, "y=", y);

// third way
var p = 8;
var q = 18;
[p, q] = [q, p];
console.log("after swap: p=", p, "q=", q);