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

//Task 3: Arrow Function
const calculateBonus = (salary, performanceRating) => {
    if (performanceRating === "Excellent"){
        return 0.2*salary
    };
    if (performanceRating === "Good"){
        return 0.1*salary
    };
    if (performanceRating === "Average"){
        return 0.05*salary
    }
    else {
        return "invalid"
    };
}; //function to calculate bonus based on the following rules:
//"Excellent" → 20% of salary.
//"Good" → 10% of salary.
//"Average" → 5% of salary.

console.log(`Bonus: $${calculateBonus(5000, "Excellent")}`); 
console.log(`Bonus: $${calculateBonus(7000, "Good")}`);   
//logged results to console   

//Task 4: Parameters and Arguments
const calculateSubscriptionCost = (plan, months, discount = 0) => {
    if (plan === "Basic") {
        return (months * 10) - discount
    }
    if (plan === "Premium") {
        return months * 20
    }
    if (plan === "Enterprise") {
        return (months * 50) - discount
    }
} // created function that calculates total cost based on the following criteria:
//"Basic" = $10/month
//"Premium" = $20/month
//"Enterprise" = $50/month

console.log(`Total Cost: $${calculateSubscriptionCost("Basic", 6, 10)}`); // Expected output: "Total Cost: $50"
console.log(`Total Cost: $${calculateSubscriptionCost("Premium", 12, 0)}`); // Expected output: "Total Cost: $240"
// logged results to the console


