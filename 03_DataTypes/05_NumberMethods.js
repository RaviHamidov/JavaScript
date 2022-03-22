// JavaScript Number Methods & Properties
/* The Number() is a constructor function in JavaScript 
that converts values of other types to numbers.*/

var i = Number('100');
var f = Number('10.5');
var b = Number('0b100');
typeof (i); // returns number
typeof (f); // returns number
typeof (b); // returns number

/*By using the new operator with the Number() function will 
return an object which contains constants and methods for working with numbers.*/

var i = new Number('100');
var f = new Number('10.5');
var b = new Number('0b100');
typeof (i); // returns object
typeof (f); // returns object
typeof (b); // returns object

// Compare Numbers
/* Be careful while comparing numbers using == or === operators. 
The == operator compares object references and not the values 
whereas the === operator compare values. The following example 
compares numbers created by different ways.*/

var num1 = new Number(100);
var num2 = Number('100');
var num3 = 100;

num1 == num2; // true 
num1 === num2; // false

num2 == num3; // true
num2 === num3; // true

num1 == num3; // true
num1 === num3; // false

// Number Properties
/*The Number type includes some default properties. 
JavaScript treats primitive values as objects, 
so all the properties and methods are applicable to both 
literal numbers and number objects.*/

Number.MAX_VALUE; // 1.7976931348623157e+308  
Number.MIN_VALUE; // 5e-324 
Number.NEGATIVE_INFINITY; // -Infinity 
Number.POSITIVE_INFINITY; // Infinity 
Number.NaN; // NaN 

// Number Methods

// toString()	Returns the string representation of the number value.
var num = 100;
num.toString(); // returns '100'

// valueOf()	Returns the value of Number object.
var num = new Number(100);
num.valueOf(); // returns '100'