//Database and variables
// Question 1:
var celcius = 12;
var fahrenheit;
fahrenheit = celcius * 1.8 + 32;
console.log(fahrenheit)

//Question 2:Favourite Food
let favouriteFood = "beans";
let capFavouriteFood = favouriteFood[0].toUpperCase();
console.log(capFavouriteFood);

//Question 3 :
let replaceB = favouriteFood.replace(0,"B");
console.log(replaceB);

//Question 4:
var left = "ALL Strings are CrEaTeD equal";
var right = "All STRINGS are CrEaTED Equal";
var replacedRight = right.replace("All STRINGS are CrEaTED Equal", "ALL Strings are CrEaTeD equal");
var answer = left == replacedRight;
console.log(answer);

//Question 5:
var joke = "Why couldn\'t the shoes go out and play? \nThey were all \"tied\" up!"; 
console.log(joke);

//Question 6:
let haiku = "Blowing from the west\nFallen leaves gather\nIn the east."; 
console.log(haiku);

//Question 7:
var fullName = "edu hermanns"; console.log(fullName);

//Question 8:
var bill = 10.25 + 3.99 + 7.15; var tip = bill * 15 / 100; var total = bill + tip; console.log("$" + total.toFixed(2));

//Question 9:
let adjective1 = "amazing"; let adjective2 = "fun"; let adjective3 = "entertaining"; var madLib = "The Intro to JavaScript course is " + adjective1 + ". James and Julia are so " + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 + " content!"; console.log(madLib);

//Question 10:
var firstName = "Julia"; var interest = "cats"; var hobby = "video games"; var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to play " + hobby + "."; console.log(awesomeMessage);


