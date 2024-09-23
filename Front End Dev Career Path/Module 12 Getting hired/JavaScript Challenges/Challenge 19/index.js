import shoppingCart from "./data.js";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
    const total = arr.reduce((a, b) => b.type === "savory"? a + b.price : a, 0)
    return total
}

console.log(totalSavory(shoppingCart));
