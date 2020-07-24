// Generating 10 random numbers from 0 to 6 in a dice
for (i = 0; i < 10; i++) {
    var randomNum = Math.random() * 6;
    var result = Math.round(randomNum);
    console.log(result);
}