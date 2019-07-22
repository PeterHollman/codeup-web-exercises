"use strict";
for (var i = 1; i < 101; i++) {
    if(i % 5 == 0 && i % 3 == 0){
        console.log("NeilBuzz");
    }
    else if(i % 3 == 0){
        console.log("Neil");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

j = 1;
for(j of iterable){
    if(j % 5 == 0 && j % 3 == 0) {
        console.log("NeilBuzz");
    }
}