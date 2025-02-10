//Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold){
    return (sellingPrice - costPrice)* unitsSold
    }; // created function to calculate total profit


console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`); // Expected output: "Total Profit: $1000"
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`); // Expected output: "Total Profit: $4000"
//logged to the console the results 