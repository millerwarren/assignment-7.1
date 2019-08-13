// var age = prompt("What is your age?");

// if (age < 18) {
//     console.log("You are not old enough to enter the venue.");
// } else if (age > 18 && age < 21) {
//     console.log("You can enter but cannot drink");
// } else {
//     console.log("You can enter and drink");
// }

var age = prompt("What is your age?");

if (age < 0) {
    console.log("error");
} else if (age == 21) {
    console.log("Happy 21st Birthday!");
} else
if (age % 2 != 0) {
    console.log("Your age is odd!");
} else if (age % 2 == 0) {
    console.log("You age is even!");
}