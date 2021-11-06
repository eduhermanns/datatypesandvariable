
//Question 1:
function laugh(){
   return "hahahahahahahahahaha!";
}
console.log(laugh())

//Question 2:
function laugh(num){
  let laughed = " ";
  for (i = 0; i < num; i++){
    laughed += " ha"
  }
  console.log(laughed + "! ")
}
laugh(3);
//Question 3:
function makeLine(length) {
 let line = "";
 for (let j = 1; j <= length; j++) {
   line += "* "
 }
 return line + "\n";
}


function buildTriangle(length){
  let asterisk = " ";
  for (i = 1; i <= length; i++){
    asterisk = i
    console.log(makeLine(asterisk))
  }
  return
}
buildTriangle(10);


//Question 4:
const laugh = function laugh(num){
  
  let laughed = " ";
  for (i = 0; i < num; i++){
    laughed += "ha"
  }
  return laughed + "! "
}
console.log(laugh(3));

//Question 5:
const cry = function emotions(){
  return "boohoo!"
}
console.log(cry())

//Question 6:
let feelings = function laugh(num){
 
  let laughWord = "";
  
  for(i = 0; i < num; i++){
    laughWord += "Ha"
  }
  return laughWord + "! "
}



function emotions(attitude, feelings){
 console.log("I am " + attitude + ", " + feelings);
}
emotions("happy",feelings(3))
