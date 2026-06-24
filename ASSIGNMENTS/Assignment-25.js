// Ternay Operator

const age = 18;

const ans = age > 18 ? "Eligible" : "Not Eligible";
console.log(ans);

// A customer gets a discount if their purchase amount is ₹1000 or more.
//  Use a ternary operator to display either "Discount Applied" or "No Discount".

const prompt = require("prompt-sync")();

let Amount = Number(prompt("Enter the bill amount: "));

const Discount = Amount > 1000 ? "Discount Applied" : "No Discount";
console.log(Discount);

