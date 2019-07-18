// function filterNumbers(){
//     var theInput = prompt("Enter something");
//     var theArray = Number(theInput.split(" "));
//
//     if(isNaN(theArray)){
//         console.log("This isn't a number");
//     }
//     else{
//         console.log(theArray);
//     }
// }
// filterNumbers();

var dogArray = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
]

dogArray.forEach(function (dog) {
    var x = dog.age + 1;
    console.log(x);
});