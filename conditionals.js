
//Question 1:
let number = 8; if (number % 2 === 0 ) {console.log("even");} else {console.log("odd")}; 
//Question 2 : 
var musicians = 4;
if (musicians <= 0) {
    console.log("not a group");
} else if (musicians == 1){
    console.log("solo");
} else if (musicians == 2) {
    console.log("duet");
} else if (musicians == 3) {
    console.log("trio");
} else if (musicians == 4){
    console.log("quarte");
} else {
    console.log("this is a large group");
}

//Question 3 :
let room = "ballroom";
let suspect = "Mr. Kalehoff";
let weapon = "poison";
let solved = "false"
if (room === "gallery" && suspect === "Ms. Van Cleve") {
    console.log( solved);
} else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    console.log( suspect + " did it in the " + room + " with the " + weapon + "! ");
} else if (room == "billiards room" && suspect == "Mrs. Sparr") {
    console.log( solved);
} else if (room == "dining room" && suspect == "Mr. Parkes"){
    console.log( solved)
} else {
    console.log( solved);
}

//Question 5 :
let balance = 12850.00;
let checkBalance = true;
let isActive = false;

if (checkBalance) {
        if (isActive === true && balance > 0 ) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    } else if (isActive === false) {
        console.log("Your account is no longer active.")
    } else if (balance === 0) {
        console.log ("Your account is emptht")
    } else {
        console.log ("Your balance is negative. Please contact your bank")
    }
} else {
    console.log("Thank you. Have a nice day!")
}

//Question let flavor = "chocolate";
let vessel = "cone";
let toppings = "peanuts"
if (flavor === "chocolate" && vessel === "bowl" && toppings === "sprinkles") {
    console.log("");
} else if (flavor === "chocolate" && vessel === "bowl" && toppings === "peanuts") {
    console.log("");
} else if (flavor === "chocolate" && vessel === "cone" && toppings === "sprinkles") {
    console.log("");
} else if (flavor === "chocolate" && vessel === "cone" && toppings === "peanuts") {
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
} else if (flavor === "vanilla" && vessel === "bowl" && toppings === "sprinkles") {
    console.log("");
} else if (flavor === "vanilla" && vessel === "bowl" && toppings === "peanuts") {
    console.log("");
} else if (flavor === "vanilla" && vessel === "cone" && toppings === "sprinkles") {
    console.log("");
} else if (flavor === "vanilla" && vessel === "cone" && toppings === "peanuts") {
    console.log("");
} else {
    console.log ("unavailable")
}

//Question 6 :
var shirtWidth = 18; 
var shirtLength = 29; 
var shirtSleeve = 8.47
 if ( shirtWidth == 18 && shirtLength == 28 && shirtSleeve == 8.13) {
     console.log("Size S (small)");
 } else if ( shirtWidth <=20 && shirtLength <= 29 && shirtSleeve <= 8.38) {
     console.log("Size M (medium)");
 } else if ( shirtWidth <= 22 && shirtLength <= 30 && shirtSleeve <= 8.63) {
     console.log("Size L (large)");
 } else if ( shirtWidth <= 24 && shirtLength <= 31 && shirtSleeve <= 8.88) {
     console.log("Size XL (x-large)");
 } else if ( shirtWidth <= 26 && shirtLength <= 33 && shirtSleeve <= 9.63) {
     console.log("Size 2XL (2x-large)");
 } else {
     console.log("N/A");
 }
//Question 7
let eatsPlants = false;
let eatsAnimals = true;
let category;
eatsPlants === true && eatsAnimals === true ? category = "omnivore" :
eatsPlants === true && eatsAnimals === false ? ccategory = "herbivore":
eatsPlants === false && eatsAnimals == true ?  category = "carnivore" :
console.log(category);
