
while (true) {
var theInput = Number(prompt("Please enter an odd number between 1-50"));
   if(theInput % 2 == 0 || theInput > 50){
   theInput = Number(prompt("Please enter an ODD number between 1-50"));
   }
   if(theInput % 2 !== 0){
       break;
   }
}

for (var i = 1; i < 50; i = i + 2) {
    if(i !== theInput){
    console.log("Here is an odd number" + i);
    }
    if (i == theInput) {
        console.log("Yikes skipping " + theInput)
        continue;
    }

}

