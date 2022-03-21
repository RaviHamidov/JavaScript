// JavaScript Operators
// JavaScript includes operators same as other languages. An operator performs some operation on single or multiple operands (data value) and produces a result.

// 1. Arithmetic Operators
// Arithmetic operators are used to perform mathematical operations between numeric operands.

// + -> Adds two numeric operands.
// - -> Subtract right operand from left operand
// * -> Multiply two numeric operands.
// / -> Divide left operand by right operand.
// % -> Modulus operator. Returns remainder of two operands.
// ++ -> Increment operator. Increase operand value by one.
// -- -> Decrement operator. Decrease value by one.

var x = 10, y = 20;

var z = x + y; // performs addition and return 30

z = y - x; // performs substraction and return 10

z = x * y; // performs multiplication and return 200 

z = y / x; // performs division and return 2

z = x % 2; // returns division remainder 5

x++; // post-increment, x will be 10 here and 11 in the next line

++x; // pre-increment, x will be 11 here

x--; // post-decrement, x will be 11 here and 10 in the next line

--x; // pre-decrement, x will be 9 here

var a = 5, b = "Hello ", c = "World!", d = 10;

a + b; // returns "5Hello "

b + c; // returns "Hello World!"

a + d; // returns 15

b + true; // returns "Hello true"

c - b; // returns NaN; - operator can only used with numbers


// 2. Comparison Operators

// JavaScript provides comparison operators that compare two operands and return a boolean value true or false.
// == -> Compares the equality of two operands without considering type.
// === -> Compares equality of two operands with type.
// != -> Compares inequality of two operands.
// > -> Returns a boolean value true if the left-side value is greater than the right-side value; otherwise, returns false.
// < -> Returns a boolean value true if the left-side value is less than the right-side value; otherwise, returns false.
// >= -> Returns a boolean value true if the left-side value is greater than or equal to the right-side value; otherwise, returns false.
// <= -> Returns a boolean value true if the left-side value is less than or equal to the right-side value; otherwise, returns false.

var a = 5, b = 10, c = "5";
var x = a;

a == c; // returns true

a === c; // returns false

a == x; // returns true

a != b; // returns true

a > b; // returns false

a < b; // returns true

a >= b; // returns false

a <= b; // returns true

// 3. Logical Operators
// In JavaScript, the logical operators are used to combine two or more conditions. JavaScript provides the following logical operators.

// && is known as AND operator. It checks whether two operands are non-zero or not (0, false, undefined, null or "" are considered as zero). It returns 1 if they are non-zero; otherwise, returns 0.
// || is known as OR operator. It checks whether any one of the two operands is non-zero or not (0, false, undefined, null or "" is considered as zero). It returns 1 if any one of of them is non-zero; otherwise, returns 0.
// ! is known as NOT operator. It reverses the boolean result of the operand (or condition). !false returns true, and !true returns false.

var a = 5, b = 10;

(a != b) && (a < b); // returns true

(a > b) || (a == b); // returns false

(a < b) || (a == b); // returns true

!(a < b); // returns false

!(a > b); // returns true

// 4. Assignment Operators
// JavaScript provides the assignment operators to assign values to variables with less key strokes.

// =	Assigns right operand value to the left operand.
// +=	Sums up left and right operand values and assigns the result to the left operand.
// -=	Subtract right operand value from the left operand value and assigns the result to the left operand.
// *=	Multiply left and right operand values and assigns the result to the left operand.
// /=	Divide left operand value by right operand value and assign the result to the left operand.
// %=	Get the modulus of left operand divide by right operand and assign resulted modulus to the left operand.

var x = 5, y = 10, z = 15;

x = y; // x would be 10

x += 1; // x would be 11

x -= 1; // x would be 9

x *= 5; // x would be 50

x /= 5; // x would be 2

x %= 2; // x would be 0

// 5. Conditional Operators
// 6. Ternary Operators
// JavaScript provides a special operator called ternary operator :? that assigns a value to a variable based on some condition. This is the short form of the if else condition.

var a = 10, b = 5;

var c = a > b? a : b; // value of c would be 10
var d = a > b? b : a; // value of d would be 5

/*
JavaScript includes operators that perform some operation on single or multiple operands (data value) and produce a result.
JavaScript includes various categories of operators: Arithmetic operators, Comparison operators, Logical operators, Assignment operators, Conditional operators.
Ternary operator ?: is a short form of if-else condition.
*/