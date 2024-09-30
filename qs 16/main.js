//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var guestArr = ["sahiba", "areeba", "sidra", "rida"];
guestArr.map(function (items) { return (console.log("dear ".concat(items, ", you are invited to come to my house for having dinner with me"))); });
var notCome = "areeba";
var newGuest = "shafia";
guestArr[1] = newGuest;
//guestArr.map((items) => (
//  console.log(`dear ${items}, ( you are invited to come to my house for having dinner with me`)
//));
console.log("Miss ".concat(notCome, ", will not make it."));
var guestbegin = "asifa";
guestArr.unshift(guestbegin);
//guestArr.map((items) => (
// console.log(`dear ${items}, you are invited to come to my house for having dinner with me`)
//));
//console.log(guestArr);
var middleGuest = "aisha";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
//console.log(guestArr);
guestArr.push("umaisha");
//console.log(guestArr)
guestArr.map(function (items) { return (console.log("dear ".concat(items, ", you are codinally invited for having dinner"))); });
