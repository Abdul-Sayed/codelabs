// 1. Truthy and Falsy Check
const values = [0, "", "Hello", 42, null];
values.forEach(value => {
    console.log(value ? "Truthy" : "Falsy");
});

// 2. Age Eligibility
const age = 17;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not old enough to vote.");
}

// 3. Calculate Final Price
const originalPrice = 150;
const discountRate = 0.20;
const taxRate = 0.08;
const discount = originalPrice * discountRate;
const discountedPrice = originalPrice - discount;
const tax = discountedPrice * taxRate;
const finalPrice = discountedPrice + tax;

console.log(`Original Price: $${originalPrice}`);
console.log(`Discount: $${discount.toFixed(2)}`);
console.log(`Tax: $${tax.toFixed(2)}`);
console.log(`Final Price: $${finalPrice.toFixed(2)}`);

// 4. Nested If-Statements for Login
// There are typically taken from a form
const username = "admin"; 
const password = "password123";

if (username === "admin") {
    if (password === "password123") {
        console.log("Login successful.");
    } else {
        console.log("Incorrect password.");
    }
} else {
    console.log("Username not found.");
}


// 5. Driving Eligibility
function checkDrivingEligibility(age, hasLicense) {
    if (age >= 18) {
      if (hasLicense) {
        console.log("You can drive.");
      } else {
        console.log("You need a license to drive.");
      }
    } else {
      console.log("You are not old enough to drive.");
    }
  }
  
  checkDrivingEligibility(20, true);  // You can drive.
  checkDrivingEligibility(20, false); // You need a license to drive.
  checkDrivingEligibility(16, false); // You are not old enough to drive.


// 6. Logical Operators Practice
const isWeekend = true; // Change to false to test other cases
const isHoliday = false; // Change to true to test other cases

if (isWeekend || isHoliday) {
  console.log("You can relax today!");
} else {
  console.log("It's a workday.");
}


// 7. Function: Greeting
function greet(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript class.`);
  }
  
  greet("Alice");
  greet("Bob");
  

// 8. Function: Square a Number
  function square(number) {
    return number * number;
  }
  
  console.log(square(5)); // Output: 25
  console.log(square(7)); // Output: 49
  console.log(square(10)); // Output: 100
  

  // 9. Function with Default Parameters
  function calculateDiscount(price, discountRate = 0.1) {
    const discount = price * discountRate;
    const finalPrice = price - discount;
  
    console.log(`Discount: $${discount.toFixed(2)}`);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`);
  }
  
  calculateDiscount(100); // Default discount rate of 0.1
  calculateDiscount(200, 0.2); // Custom discount rate of 0.2
  


  // 10. Tax and Discount Calculator
  function calculateFinalPrice(price, discountRate = 0.15, taxRate = 0.08) {
    const discountedPrice = price - price * discountRate;
    const finalPrice = discountedPrice + discountedPrice * taxRate;
  
    console.log(`Original Price: ${price}`);
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
    console.log(`Tax: ${taxRate}`);
    console.log(`Final Price (after tax): $${finalPrice.toFixed(2)}`);
  }
  
  calculateFinalPrice(100); // Default discountRate = 0.15, taxRate = 0.08
  calculateFinalPrice(250, 0.2, 0.1); // Custom discountRate = 0.2, taxRate = 0.1
  