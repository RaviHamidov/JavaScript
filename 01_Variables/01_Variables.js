// A variable is a container for storing data
// var <variable-name>;
// var <variable-name> = <value>;

// A variable must have a unique name. The following declares a variable.
var msg; // declaring value without assigning a value

// Above, the var msg; is a variable declaration. It does not have any value yet. The default value of variables that do not have any value is undefined. 
// For example:
var msg;
console.log(msg); // It give you Undefined

// You can assign a value to a variable using the = operator when you declare it or after the declaration and before accseing it.
var msg;
msg = "Hello My World!"; // assigned a string value
console.log(msg); // acces a variable 

// the following declares and assign a numeric value
var num = 100;
var hundred = num; // assigned a varibles to variable
console.log(hundred); 

// Multiple variable declaration, This feauture can also be declared in a single line seperated by a comma.
// For example:
var one = 1, two = 'two', three;

// White Spaces and Line Breaks in Variable Declaration
// JavaScript allows multiple white spaces and line breaks when you declare a variable with var keyword.

var
             one
         =

         1,
            two
            =
            "two"
         ;

// Points to Remember 

// > Variable stores data value that can be changed later on.
// > Variables can be defined using var keyword. Variables defined without var keyword become global variables.
// > Variables must be initialized before accesing it.
// > JS allows multiple white spaces and line breaks in a variable declaration.
// > Multiple variables can be defined in a single line seperated by a comma 
// > JS is a loosly-typed language, so a variable can store any type value
// > Variable names are case sensitive.
// > Variable names can contain letters, digits, or the symbols $ and _. It cannot start with a digit 0-9.
