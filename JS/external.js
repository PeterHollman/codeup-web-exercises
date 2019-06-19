"use strict";

console.log("Hello from External JavaScript");
alert("Welcome to my website!");
var userData = prompt("What is your favorite color?");
alert("Great, " + userData + " is my favorite color too!");

var mermaidRent = Number(prompt( "How many days did you rent the Little Mermaid for?"));
var bearRent = Number(prompt( "How many days did you rent Brother Bear for?"));
var herculesRent = Number(prompt("How many days did you rent Hercules for?"));
var movieCost = (mermaidRent * 3) + (bearRent * 3) + (herculesRent * 3);
alert("You owe " + movieCost + " dollars to Blockbuster.  Good thing they are out of business.");

var googleHours = Number(prompt("How many hours did you work for Google this week?"));
var amazonHours = Number(prompt("How many hours did you work for Amazon this week?"));
var facebookHours = Number(prompt("How many hours did you work for Facebook this week?"));
var totalPay = (googleHours * 400) + (amazonHours * 380) + (facebookHours * 350);
alert("Your paycheck will be " + totalPay + " dollars.  Treat Yo' Self 2019!");

var classSchedule = confirm("Do you have a free period at 1130 for a coding class?");
var classOpen = confirm("Does the class you want to join already have 20 people in it?");
var bookClass = classSchedule && classOpen;
alert("Student will be able to sign up for class " + bookClass);

var premiumMember = confirm("Are you a premium member?");
var moreThan1Item = false;
if (premiumMember === false){
moreThan1Item = confirm("Did you buy at least 2 items?");
}
var couponValid = confirm("Is the coupon valid?");
var canUseCoupon = (premiumMember || moreThan1Item) && couponValid;
alert("You can use the coupon " + canUseCoupon);