//2 exponent loop
var ex = 2;
while (ex <= 65536) {
    console.log(ex);
    ex = ex * 2;
}

//Ice cream loop
var allCones = Math.floor(Math.random() * 50) + 50;
do{
var someCones = Math.floor(Math.random() * 5) + 1;
console.log("You sold " + someCones + " only " + allCones + " left to sell")
    allCones = allCones - someCones;
    if(allCones < someCones){
        console.log("I don't have enough cones to sell you " + someCones);
    }
} while(allCones > 0);
console.log("Sold all of my cones");

