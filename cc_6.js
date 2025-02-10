//Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold){
    return (sellingPrice - costPrice)* unitsSold
    }; // created function to calculate total profit


console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`); // Expected output: "Total Profit: $1000"
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`); // Expected output: "Total Profit: $4000"
//logged to the console the results 

//Task 2: Function Expression
function calculateSalesTax (amount, taxRate) {
    return amount * taxRate
}; //Declared a function expression calculateSalesTax that calculates sales tax.

console.log(`Sales tax: $${Math.round(calculateSalesTax(100, 0.07))}`);
console.log(`Sales tax: $${Math.round(calculateSalesTax(500, 0.1))}`);  
//logged results to the console