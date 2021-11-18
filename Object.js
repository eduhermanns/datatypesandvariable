
//Question 1:
const umbrella = {
 color: "pink",
 isOpen: false,
 open: function() {
   if (umbrella.isOpen === true) {
     return "The umbrella is already opened!";
   } else {
     umbrella.isOpen = true;
     return "Julia opens the umbrella!";
   }
  },
 close: function() {
   if (umbrella.isOpen === false) {
     return "The umbrella is already closed";
   } else {
     umbrella.isOpen === false;
     return "Julia closes the umbrella"
   }
 }
};
console.log(umbrella.close())

//Question 2:
const breakfast = {
  name: "lumberjack",
  price: 9.95,
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
}
console.log(breakfast)

//Question 3:
const savingsAccount = {
 balance: 1000,
 interestRatePercent: 1,
 deposit: function addMoney(amount) {
   if (amount > 0) {
     savingsAccount.balance += amount;
   }
 },
 withdraw: function removeMoney(amount) {
   var verifyBalance = savingsAccount.balance - amount;
   if (amount > 0 && verifyBalance >= 0) {
     savingsAccount.balance -= amount;
   }
 },
 printAccountSummary: function() {
  return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
 }
}
console.log(savingsAccount.printAccountSummary())

//Question 4:
savingsAccount.balance;


//Question 5:
const facebookProfile = {
  name: "edu",
  friends: 5,
  messages: [
    "Happy Birthday Darling",
    "Hello it a great morning",
    "I miss you"
  ],
  postMessage: function(messages){
    facebookProfile.messages.push(messages)
    return facebookProfile.messages
  },
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index,1)
     return facebookProfile.messages
  },
  addFriend: function() {
    return facebookProfile.friends += 1
  },
  removeFriend: function(){
    return facebookProfile.friends -= 1
  }
}
console.log(facebookProfile.postMessage("Good morning my people"));
console.log(facebookProfile.deleteMessage(2));
console.log(facebookProfile.addFriend());
console.log(facebookProfile.removeFriend());

//Question 6:
const donuts = [
 { type: "Jelly", cost: 1.22 },
 { type: "Chocolate", cost: 2.45 },
 { type: "Cider", cost: 1.59 },
 { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut){
  console.log(donut.type + " donuts cost $" + donut.cost + " each" )
})
