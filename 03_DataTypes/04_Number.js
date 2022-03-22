// JavaScript Numbers
/* The Number is a primitive data type used for 
positive or negative integer, float, binary, octal, 
hexadecimal, and exponential values in JavaScript. */

var num1 = 100; // integer
var num2 = -100; // negative integer

var num3 = 10.52; // float
var num4 = -10.52; // negative floats

var num5 = 0xfff; // hexadecimal
var num6 = 256e-5; // exponential
var num7 = 030; // octal
var num8 = 0b0010001; // binary

// Integers
/* Numbers can be positive or negative integers. 
However, integers are floating-point values in JavaScript. 
Integers value will be accurate up to 15 digits in JavaScript. 
Integers with 16 digits onwards will be changed and rounded up or down; therefore, 
use BigInt for integers larger than 15 digits. */

// 16 digit integer
var int1 = 1234567890123456; // accurate

// 17 digit integer
var int2 = 12345678901234569; // will be 12345678901234568 

// 16 digit integer
var int3 = 9999999999999998; // will be 9999999999999998 

// 16 digit integer, last digit 9
var int4 = 9999999999999999; // will be 10000000000000000 

// BigInt
/*The BigInt type is a numeric primitive type that can 
store integers with arbitrary precision. Use the BigInt 
for the large integers having more than 15 digits. 
Append n to the end of an integer to make it BigInt.*/

// 16 digit integer
var int1 = 1234567890123459n; // will be 1234567890123459

// 17 digit integer
var int2 = 12345678901234569n; // will be 12345678901234569

// 20 digit integer
var int3 = 9999999999999999999n; // will be 9999999999999999999

// FloatingPoint Numbers
/*The floating-point numbers in JavaScript can only keep 
17 decimal places of precision; beyond that, the value will be changed.*/

// 17 decimal places
var f1 = 123456789012345.9; // accurate 

// 18 decimal places
var f2 = 1234567890123456.9; // will be 1234567890123457 

// 19 decimal places
var f3 = 1234567890123456.79; // will be 1234567890123456.8 

/*Arithmetic operations on floating-point numbers in 
JavaScript are not always accurate. For example:*/

var f1 = 5.1 + 5.2; // will be 10.3
            
var f2 = 10.1 + 10.2; // will be 20.299999999999997 

var f3 = (10.1*100 + 10.2*100)/100; // instead of 10.1 + 10.2

/*Arithmetic operation (except addition) of the numeric string 
will result in a number, as shown below.*/

var numStr1 = "5", numStr2 = "4";
            
var multiplication = numStr1 * numStr2; // returns20 
var division = numStr1 / numStr2; // returns 1.25 
var modulus = numStr1 % numStr2; // returns 1 

// Even if one of the values is a number, the result would be the same.

var num = 5, str = "4";
            
var multiplication = num * str; //returns 20 
var division = num / str; //returns 1.25 
var modulus = num % str; //returns 1

// The + operator concatenates if any one value is a literal string.

var num = 5, str = "4";

var result = num + str; //returns "54"