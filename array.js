
function checkDriverAge() {

	var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
checkDriverAge()

function checkDriverAge() {

	var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
checkDriverAge()

//Question 1:
var softwareEngineeringStudents = [
  "edu", 
  "tosin", 
  "lanre", 
  "kelechi",
   "kingsley", 
   "Salim",
   "stephenie", 
   "alimi", 
   "timothy",
    "emmanuel"
]
console.log(softwareEngineeringStudents)

//Question 2:
let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";

let crew = [
  captain,
  second,
  pilot,
  companion,
  mercenary,
  mechanic
]
console.log(crew);

//Question 3 :
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[0] = 2.15;
prices[2] = 50.00;
prices[6] = 25.10;

console.log(prices);

//Question 4:
const rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(5,0, "Purple")
console.log(rainbow);

//Question 5:
const team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(){
  if (team.length >= 7) {
    console.log(team)
  }else {
    console.log(false)
  }
}
hasEnoughPlayers();

//Question 6:
let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";

const crew = [captain, second, pilot, companion, mercenary, mechanic];


let doctor = "Simon";
let sister = "River";
let shepherd = "Book";

crew.push(doctor);
crew.push(sister);
crew.push(shepherd);

console.log(crew)

//Question 7:
a) reverse()
b)sort()
c)shift()
d)join()

//Question 8:
const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach(function(num) {
  if(num % 3 === 0){
    console.log(num + 100)
  }
})

//Question 9:

const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

const totals = bills.map(function(amount){
amount = amount
let tips =  0.15 * amount
amount = amount + tips
console.log(amount.toFixed())
})

//Question 10: 
const numbers = [
   [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
   [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
   [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
   [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
   [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
   [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
   [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
   [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
   [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
   [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (let i = 0; i < numbers.length; i++){
  for (let j = 0; j < numbers[i].length; j++){
     if (numbers[i][j] % 2 === 0) {
              numbers[i][j] = "even"
            }
            else {
                numbers[i][j] = "odd"
            }
  }
}
console.log(numbers);


