let str = "Hello World!";
let strOne = "I'm Passionate Web Developer";
let strTwo = "From Baku, Azerbaijan";

// A string can also be treated like zero index based character array.
// For example:
str[0] // H
str[1] // e
str[2] // l
str[3] // l
str[4] // o

str.length // 11

// Since, string is character index, it can be accessed using for loop and for-of loop.
for (var i = 0; i < str.length; i++)
    console.log([i]);

// Concatenation
var conca = "Hi" + ' Developers' + ` !`

// Include quotation marks inside string
var markOne = "This is 'simple' string";

var markTwo = 'This is "simple" string';

var markThree = 'This is \'simple\' string';

var str1 = new String('Hello World');
var str2 = new String('Hello World');
var str3 = 'Hello World';
var str4 = str1;

str1 == str2; // false - because str1 and str2 are two different objects
str1 == str3; // true
str1 === str4; // true

typeof(str1); // object
typeof(str3); //string

