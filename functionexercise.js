
//Question 1:

function laugh() {
  return "hahahahahahahahahaha!";
}
console.log(laugh())

//Question 2: 
function laugh(num){
  laughs = "";
  for(i = 0; i < num; i++){
    laughs += "ha"
  }
  return laughs
}
console.log(laugh(5));

//Question 3:
function makeLine(length) {
 let line = "";
 for (let j = 1; j <= length; j++) {
   line += "* "
 }
 return line + "\n";
}

function buildTriangle(trianglelength){
  let asterisk = " ";
  for (i = 1; i <= trianglelength; i++){
    asterisk = i
    console.log(makeLine(asterisk))
  }
  return
}
buildTriangle(10);

//Question 4:
const laugh = function(num){
  let laughs = " ";
  for(i = 0; i < num; i++){
    laughs += "ha"
  }
  return laughs + "!"
}
console.log(laugh(10));

//Question 5:
let cry = function emotion() {
  return  "boohoo!"
}
console.log(cry());

//Question 6:
function emotions(feeling, myfunction){
  console.log ("I am " + feeling + myfunction(3))
}

emotions("happy ", function laugh(num) {

  let laughWord = "";
  for (i = 0; i < num; i++){
    laughWord += "ha"
  }
  return laughWord + "! "
} );
