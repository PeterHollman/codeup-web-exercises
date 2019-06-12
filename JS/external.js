"use strict";

console.log("Hello from External JavaScript");
alert("Welcome to my website!");
var userdata = prompt("What is your favorite color?");
alert("Great, " + userdata + " is my favorite color too!");

var mermaidRent = prompt( "How many days did you rent the Little Mermaid for?");
var bearRent = prompt( "How many days did you rent Brother Bear for?");
var herculesRent = prompt("How many days did you rent Hercules for?");
var movieCost = (mermaidRent * 3) + (bearRent * 3) + (herculesRent * 3);
alert("You owe " + movieCost + " dollars to Blockbuster.  Good thing they are out of business.");

var googleHours = prompt("How many hours did you work for Google this week?");
var amazonHours = prompt("How many hours did you work for Amazon this week?");
var facebookHours = prompt("How many hours did you work for Facebook this week?");
var totalPay = (googleHours * 400) + (amazonHours * 380) + (facebookHours * 350);
alert("Your paycheck will be " + totalPay + " dollars.  Treat Yo' Self 2019!");

var classSchedule = confirm("Do you have a free period at 1130 for a coding class?");
var classOpen = confirm("Does the class you want to join already have 20 people in it?");
var bookClass = classSchedule && classOpen;