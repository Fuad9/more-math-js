function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var currentVal = numbers[i];
        sum = sum + currentVal;
    }
    return sum;
}
var numbers = [14, 35, 76, 34, 11];
var result = getArraySum(numbers);
console.log(result);