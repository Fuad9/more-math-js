function removeDuplicate() {
    var unique = [];
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        var index = unique.indexOf(element);
        if (index == -1) {
            unique.push(element);
        }
    }
    return unique;
}
numbers = [1, 1, 2, 4, 23, 3, 3, 12, 17];
var result = removeDuplicate(numbers);
console.log(result);