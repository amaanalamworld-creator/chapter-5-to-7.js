// ================================
// Q1. Addition
// ================================

var num1 = 10;
var num2 = 20;

var sum = num1 + num2;

console.log("Q1. Addition");
console.log("Sum: " + sum);


// ================================
// Q2. Mathematical Operations
// ================================

var a = 20;
var b = 10;

console.log("Q2. Mathematical Operations");
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));


// ================================
// Q3. Increment and Decrement
// ================================

var value;

console.log("Q3. Increment and Decrement");
console.log("Value after variable declaration is: " + value);

value = 3;

console.log("Initial value: " + value);

value++;

console.log("Value after increment is: " + value);

value = value + 7;

console.log("Value after addition is: " + value);

value--;

console.log("Value after decrement is: " + value);

var remainder = value % 3;

console.log("The remainder is: " + remainder);


// ================================
// Q4. Movie Ticket Cost
// ================================

var ticketPrice = 600;
var ticketQuantity = 5;

var totalTicketCost = ticketPrice * ticketQuantity;

console.log("Q4. Movie Ticket Cost");
console.log("Price of one ticket: " + ticketPrice + " PKR");
console.log("Total cost of 5 tickets: " + totalTicketCost + " PKR");


// ================================
// Q5. Multiplication Table
// ================================

var number = 5;

console.log("Q5. Multiplication Table of " + number);

console.log(number + " x 1 = " + (number * 1));
console.log(number + " x 2 = " + (number * 2));
console.log(number + " x 3 = " + (number * 3));
console.log(number + " x 4 = " + (number * 4));
console.log(number + " x 5 = " + (number * 5));
console.log(number + " x 6 = " + (number * 6));
console.log(number + " x 7 = " + (number * 7));
console.log(number + " x 8 = " + (number * 8));
console.log(number + " x 9 = " + (number * 9));
console.log(number + " x 10 = " + (number * 10));


// ================================
// Q6. Temperature Converter
// ================================

var celsius = 25;

var fahrenheit = (celsius * 9 / 5) + 32;

console.log("Q6. Temperature Converter");
console.log(celsius + "°C is " + fahrenheit + "°F");

var tempFahrenheit = 77;

var tempCelsius = (tempFahrenheit - 32) * 5 / 9;

console.log(tempFahrenheit + "°F is " + tempCelsius + "°C");


// ================================
// Q7. Shopping Cart Checkout
// ================================

var priceItem1 = 500;
var priceItem2 = 1000;

var quantityItem1 = 2;
var quantityItem2 = 3;

var shippingCharges = 200;

var totalItem1 = priceItem1 * quantityItem1;
var totalItem2 = priceItem2 * quantityItem2;

var totalCost = totalItem1 + totalItem2 + shippingCharges;

console.log("Q7. Shopping Cart Receipt");
console.log("Price of Item 1: " + priceItem1);
console.log("Quantity of Item 1: " + quantityItem1);
console.log("Price of Item 2: " + priceItem2);
console.log("Quantity of Item 2: " + quantityItem2);
console.log("Shipping Charges: " + shippingCharges);
console.log("Total Cost: " + totalCost + " PKR");


// ================================
// Q8. Student Marks and Percentage
// ================================

var totalMarks = 1100;
var marksObtained = 850;

var percentage = (marksObtained / totalMarks) * 100;

console.log("Q8. Student Marks");
console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + marksObtained);
console.log("Percentage: " + percentage + "%");


// ================================
// Q9. Currency Converter
// ================================

var dollar = 10;
var riyal = 25;

var totalCurrency = (dollar * 104) + (riyal * 28);

console.log("Q9. Currency Converter");
console.log("Total Currency in PKR: " + totalCurrency + " PKR");


// ================================
// Q10. Arithmetic Operations
// ================================

var num = 5;

var result = ((num + 5) * 10) / 2;

console.log("Q10. Arithmetic Operations");
console.log("Final Result: " + result);


// ================================
// Q11. Age Calculator
// ================================

var currentYear = 2026;
var birthYear = 2005;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

console.log("Q11. Age Calculator");
console.log("They are either " + age1 + " or " + age2 + " years old");


// ================================
// Q12. The Geometrizer
// ================================

var radius = 5;
var pi = 3.142;

var circumference = 2 * pi * radius;

var area = pi * radius * radius;

console.log("Q12. The Geometrizer");
console.log("The circumference is: " + circumference);
console.log("The area is: " + area);


// ================================
// Q13. Arithmetic Result
// ================================

// Question 13 image is missing.
// Exact solution will be added after receiving its screenshot.


// ================================
// Q14. Increment and Decrement
// ================================

var x = 2;
var y = 1;

var answer = --x - --y + ++y + y--;

console.log("Q14. Increment and Decrement");
console.log("Value of a: " + x);
console.log("Value of b: " + y);
console.log("Value of result: " + answer);


// ================================
// Q15. Lifetime Supply Calculator
// ================================

var favoriteSnack = "Chips";

var currentAge = 20;

var maxAge = 80;

var amountPerDay = 2;

var totalSupply = (maxAge - currentAge) * 365 * amountPerDay;

console.log("Q15. Lifetime Supply Calculator");
console.log("Favorite Snack: " + favoriteSnack);
console.log("Current Age: " + currentAge);
console.log("Maximum Age: " + maxAge);
console.log("Amount Per Day: " + amountPerDay);

console.log("You will need " + totalSupply + " " + favoriteSnack +
" to last you until the ripe old age of " + maxAge);