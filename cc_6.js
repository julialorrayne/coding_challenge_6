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

//Task 5: Returning Values
const convertCurrency = (amount, exchangeRate) => {
    return (amount * exchangeRate)
}; //created a function convertCurrency that returns the converted amount.

console.log(`Converted Amount: $${convertCurrency(100, 1.1).toFixed(2)}`); 
console.log(`Converted Amount: $${convertCurrency(250, 0.85).toFixed(2)}`); 
//logged results to console

//Task 6: Higher-Order Functions
let orders = [200, 600, 1200, 450, 800]; //Declared an array orders with five order amounts.

const applyBulkDiscount = (orders, discountFunction) => {
    return orders.map(discountFunction)
}; ////Wrote a higher-order function applyBulkDiscount

let discountFunction =  amount => amount > 500? amount * 0.9 : amount; //applied discount on order above 500

let discount_order = applyBulkDiscount(orders,discountFunction); //passed the discountFunction function as argument on applyBulkDiscount

console.log(discount_order); 

//Task 7: Closures
function createExpenseTracker() {
    let expenses_total = 0;
    return function(expenses){
        expenses_total += expenses;
        return `Total expenses: $${expenses_total}`        
    }
}; //created a function createExpenseTracker() that returns another function to add expenses and keep a running total.

let tracker = createExpenseTracker(); //created function that calls createExpenseTracker function

console.log(tracker(200)); 
console.log(tracker(150)); 
//logged results to console

//Task 8: Recursion in JavaScript
function YearsToPromotion(employeeLevel){
    if (employeeLevel >= 10) {
        return 0;
    }
    return 2 + YearsToPromotion(employeeLevel + 1)
}

function calculateYearsToPromotion (employeeLevel){
    const years = YearsToPromotion(employeeLevel);
    return`Years to level 10: ${years}`;
}
//recursive function calculateYearsToPromotion(employeeLevel) that determines years to reach level 10.

console.log(calculateYearsToPromotion(7)); 
console.log(calculateYearsToPromotion(5)); 
//logged results to console