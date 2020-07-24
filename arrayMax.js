// Finding the largest value in an array
var marks = [20, 23, 45, 78, 98, 82, 40, 50];
var max = marks[0];
for (var i = 0; i <= marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log(max);

// Finding the second the largest value in an array
var marks = [20, 23, 45, 78, 98, 82, 40, 50];
var max = marks[0];
var max2;
for (var i = 0; i <= marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max2 = max;
        max = element;
    } else if (max2 < element && element < max) {
        max2 = element;
    }
}
console.log(max2);


// Finding the third largest value in an array
var marks = [20, 23, 45, 78, 98, 82, 40, 50];
var max = marks[0];
var max2;
var max3;
for (var i = 0; i <= marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max3 = max2;
        max2 = max;
        max = element;
    } else if (max3 < element && element < max2) {
        max3 = element;
    }
}
console.log(max2);