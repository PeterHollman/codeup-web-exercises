"use strict";

//solution 1
function isTrue(boolean){
    if(boolean == true) {
        return true;
    }
    else {
        return false;
    }
}

//solution 2
function isFalse(boolean){
    if(boolean == false){
        return true;
    }
    else{
        return false;
    }
}

//solution 3
function not(value){
    var notValue = value ? false : true;
    return notValue;
}
var a = true;

a = not(a);

//solution 4
function addOne(a){
    return Number(a) + Number(1);
}
//solution 5
function isEven(a){
    if(a % 2 === 0){
        return true;
    }
    else if(a === false){
        return false;
    }
    else if (a === true){
        return false;
    }
    else {
        return false;
    }
}

//solution 6
function isIdentical(a,b){
    if(a === b)
        return true;
    else{
        return false;
    }
}

//solution 7
function isEqual(a,b){
    if(a == b)
        return true;
    else{
        return false;
    }
}

//solution 8
function or(a,b){
    return a || b;
}

//solution 9
function and(a,b){
    return a && b;
}
//solution 10
function concat(a,b){
    return String(a) + String(b);
}