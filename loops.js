//Question 1:
var x = 10;
let i = 0;
while (i <= 100)
{
if (x % 3 == 0 && x % 5 == 0)
{
console.log('FizzBuzz')
}
else if (x % 3 == 0)
{
console.log('Fizz')
}
else if (x % 5 == 0)
{
console.log('Buzz')
}
else{console.log(x)}
i++
};

//Question 2:
let num = 99;

while (num >= 1) {
    if (num === 2) {
        console.log(num + " bottles of juice on the wall! "
        + num + " bottles of juice! Take one down, pass it around... "
        + (num-1) + " bottles of juice on the wall!");
    } else if (num === 1) {
        console.log(num + " bottles of juice on the wall! "
        + num + " bottles of juice! Take one down, pass it around... "
        + (num-1) + " bottles of juice on the wall!");
    } else {
        console.log(num + " bottles of juice on the wall! "
        + num + " bottles of juice! Take one down, pass it around... "
        + (num-1) + " bottles of juice on the wall!");
    }
    num--;
}
//Question 3:
let seconds = 60;

while (seconds >= 0) {
    if (seconds === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (seconds === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (seconds === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (seconds === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (seconds === 6) {
        console.log("Main engine start");
    } else if (seconds === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else {
        console.log("T- " + seconds + " seconds");
    }
    seconds--;
}


//Question 4 :

for(x = 9; x >= 1; x--) {
  console.log("hello " + x);
}

//Question 5:
for(x = 5; x < 10; x++) {
  console.log( x);
}

//Question 6 :
for (let k = 0 ;k < 200 ;k++) {
  console.log(k);
}

//Question 7:
let solution;
 for(i = 12; i > 0 ; i--){ 
solution = i * 12; console.log(solution)
}

//Question 8:
for (let row = 0; row <= 25; row++){
   for(let seat = 0; seat <= 99; seat++) {
    console.log(row + " - " + seat); }}
