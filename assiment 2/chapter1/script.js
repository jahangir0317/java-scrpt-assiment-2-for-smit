// chapter 1
// Q 1
var num1 = 3;
var num2 = 5;

var sum = num1 + num2;

document.getElementById("result").innerHTML =
    "Sum of " + num1 + " and " + num2 + " is " + sum;

    // Q 2
// Two numbers
var num1 = 10;
var num2 = 3;

// Subtraction
var subtraction = num1 - num2;
document.getElementById("sub").innerHTML =
    "Subtraction of " + num1 + " and " + num2 + " is: " + subtraction;

// Multiplication
var multiplication = num1 * num2;
document.getElementById("mul").innerHTML =
    "Multiplication of " + num1 + " and " + num2 + " is: " + multiplication;

// Division
var division = num1 / num2;
document.getElementById("div").innerHTML =
    "Division of " + num1 + " by " + num2 + " is: " + division;

// Modulus
var modulus = num1 % num2;
document.getElementById("mod").innerHTML =
    "Modulus of " + num1 + " % " + num2 + " is: " + modulus;

    // Q 4
// a. Declare a variable
var num;
document.getElementById("a").innerHTML = "Variable declared.";

// b. Show value after declaration
document.getElementById("b").innerHTML = "Value after variable declaration is " + num;

// c. Initialize the variable
num = 5;
document.getElementById("c").innerHTML = "Variable initialized to 5";

// d. Show initial value
document.getElementById("d").innerHTML = "Initial value: " + num;

// e. Increment the variable
num++;
document.getElementById("e").innerHTML = "Variable incremented.";

// f. Show value after increment
document.getElementById("f").innerHTML = "Value after increment is: " + num;

// g. Add 7 to the variable
num = num + 7;
document.getElementById("g").innerHTML = "7 added to the variable.";

// h. Show value after addition
document.getElementById("h").innerHTML = "Value after addition is: " + num;

// i. Decrement the variable
num--;
document.getElementById("i").innerHTML = "Variable decremented.";

// j. Show value after decrement
document.getElementById("j").innerHTML = "Value after decrement is: " + num;

// k. Show remainder dividing by 3
var remainder = num % 3;
document.getElementById("k").innerHTML = "Remainder calculated.";

// l. Final Output
document.getElementById("l").innerHTML = "The remainder is: " + remainder;

// Q 5
// Cost of one movie ticket
var ticketPrice = 600;

// Calculate cost of 5 tickets
var totalCost = ticketPrice * 5;

// Show output
document.getElementById("result").innerHTML =
    "The cost of buying 5 movie tickets is " + totalCost + " PKR.";