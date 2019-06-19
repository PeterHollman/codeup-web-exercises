//Multiplication table
randomNumber = Math.floor(Math.random() * 10) + 1;
var i = 1;
for (var multiply = randomNumber; i < 11; i++) {
    answer = i * randomNumber;
    console.log(randomNumber + " * " + i + " = " + answer);
}

//Random numbers odd and even
for (var j = 0; j < 11; j++) {
var largeNumber = Math.floor(Math.random() * 180) + 20;
var remainderNumber = largeNumber % 2;
if(remainderNumber === 0){
    console.log(largeNumber + " is even");
} else{
    console.log(largeNumber + " is odd");
}
}

//pyramid console log
for (var k = 1; k < 10; k++) {
    var output = k.toString();

    while (output.length < k) {
        output = (output+k.toString());
    }
    console.log(Number(output));
}

//Countdown by 5 console log
for (var l = 100; l > 0; l = l - 5) {
    console.log(l);
}