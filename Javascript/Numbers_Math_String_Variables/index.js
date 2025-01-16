// -------------- Basic Arithmetic Operations
// Define two numbers
let num1 = 10;
let num2 = 5;

// Calculate the total and the difference
let total = num1 + num2;
let difference = num1 - num2;

// Display the results
console.log(`The total is: ${total}`);
console.log(`The difference is: ${difference}`);



// -------------- Greeting with Variables
// Ask for user's name and favorite color
let userName = prompt("What is your name?");
let favoriteColor = prompt("What is your favorite color?");

// Output a greeting message
console.log(`Hello, ${userName}! Your favorite color is ${favoriteColor}.`);



// -------------- Calculate Total Price with Tax
// Define the original price and tax rate
let originalPrice = 100;
let taxRate = 0.07;

// Calculate the total price with tax
let totalPrice = originalPrice + (originalPrice * taxRate);

// Display the result
console.log(`The total price with tax is: $${totalPrice.toFixed(2)}`);


// -------------- Calculate Total Price with Tax
// Define the first and last name
let firstName = "John";
let lastName = "Doe";

// Combine the first and last name
let fullName = firstName + " " + lastName;

// Display the result
console.log(`The full name is: ${fullName}`);


// -------------- Track Inventory
// Initialize the inventory
let inventory = 100;

// Subtract 15 items sold
inventory -= 15;

// Add 20 new items to stock
inventory += 20;

// Log the final inventory
console.log(`The final inventory is: ${inventory} items`);



// -------------- Calculate Final Price with Tax and Discount
// Define the original price, tax rate, and discount rate
let original_price = 120;
let tax_rate = 0.10;
let discountRate = 0.15;

// Calculate the price with tax
let priceWithTax = original_price + (original_price * tax_rate);

// Calculate the final price after discount
let finalPrice = priceWithTax - (priceWithTax * discountRate);

// Output the results
console.log(`The price with tax is: $${priceWithTax.toFixed(2)}`);
console.log(`The final price after discount is: $${finalPrice.toFixed(2)}`);

