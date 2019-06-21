(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            var circleArea = Math.PI * Math.pow(3, 2);
            // TODO: complete this method
            // hint: area = pi * radius^2

            return circleArea;
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if(doRounding == true){
                var output = Math.round(this.getArea());
            }
            else{
                var output = this.getArea();
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + output);
            return output;
        }
    };

    // log info about the circle
    console.log("The radius is " + circle.radius + " and the area is " + circle.getArea());
    circle.logInfo(false);
    console.log("When we round we get");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    var largeCircle = {
        largeRadius: 5,

        largeGetArea: function () {
            var largeCircleArea = Math.PI * Math.pow(5, 2);
            // TODO: complete this method
            // hint: area = pi * radius^2

            return largeCircleArea;
        },

        largeLogInfo: function (doRounding) {
            // TODO: complete this method.
            if(doRounding == true){
                var largeOutput = Math.round(this.largeGetArea());
            }
            else{
                var largeOutput = this.largeGetArea();
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.largeRadius + ", is: " + largeOutput);
            return largeOutput;
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    largeCircle.largeLogInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    largeCircle.largeLogInfo(true);
})();
