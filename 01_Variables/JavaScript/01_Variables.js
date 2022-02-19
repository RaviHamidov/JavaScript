/*  
    # JavaScript Variables

    Variable means anything that can vary. In JavaScript, a variable 
    stores the data value that can be changed later on.
    Use the reserved keyword var to declare a variable in JavaScript.

    var <variable-name>;
    var <variable-name> = <value>;

    > Variable names are case-sensitive in JavaScript. So, the variable
        names msg, MSG, Msg, mSg are considered separate variables.
    > Variable stores data value that can be changed later on.
    > Variables can be defined using var keyword. Variables
        defined without var keyword become global variables.
    > Variables must be initialized before accessing it.
    > JavaScript allows multiple white spaces and line breaks in 
        a variable declaration.
    > Multiple variables can be defined in a single line separated by a comma.
    > JavaScript is a loosely-typed language, so a variable can store any type value.
    > Variable names are case-sensitive.
    > Variable names can contain letters, digits, or the symbols $ and _. It 
        cannot start with a digit 0 - 9.
    > Variables can have local or global scope. Local variables cannot be 
        accessed out of the function where they are declared, whereas the 
        global variables can be accessed from anywhere.
*/

// Only when declared, When no value is given ( Type > undefined )
let variable
console.log(variable)

// The type is assigned according to the given value
var age = 18
console.log(age)

/*
    # Multiple Variables Declaration

    Multiple variables can also be declared in a single line separated 
    by a comma.

    var one = 1, two = 'two', three;
*/

/* 
    # White Spaces and Line Breaks in Variable Declaration

    JavaScript allows multiple white spaces and line breaks 
    when you declare a variable with var keyword.

    var
             one
         =

         1,
            two
            =
            "two"
*/

/*
    # Loosely-typed Variables

    C# or Java has strongly typed variables. It means a variable must be declared
    with the data type that specifies the type of data a variable will store.
    JavaScript is a loosely typed language. It means it does not require a data type
    to be declared. You can assign any literal values to a variable, e.g., string, integer,
    float, boolean, etc.
*/

var myvariable = 1;  // numeric value

myvariable = 'one'; // string value

myvariable = 1.1; // decimal value

myvariable = true; // boolean value

myvariable = null; // null value

/*
    # Variable Scope
    In JavaScript, a variable can be declared either in 
    the global scope or the local scope.

    # Global Variables
    Variables declared out of any function are called global variables. They can be 
    accessed anywhere in the JavaScript code, even inside any function.

    # Local Variables
    Variables declared inside the function are called local variables to that function. 
    They can only be accessed in the function where they are declared but not outside.
*/

// The main difference between var, let, and const is the difference in scope
// var -> function scope -> global scope 
// let -> block scope 
// const -> block scope  

/*  
    Mark_01 -> If you define a variable with var inside a function, 
    That variable belongs to the function it is in,
    So we can't access var from outside
*/

function myfunction_01() {
    var asd = "I like a Pizza" // here var is function scope
}
console.log(asd)

/*  
    Mark_02 -> If we had run the variable var outside of the function 
    rather than inside, I could access it and now var would be
    global scope here instead of function scope, that means I can
    access it from anywhere and change as I want.
*/

var qwe = "Motorola" // here var is global scope
function myfunction_02() {
    var qwe = "Motorola" // here var is function scope
}
console.log(qwe)

/*  
    Mark_03 -> if we say console.log(zxc) before var zxc = "Samsung"
    and then console.log(zxc) inside the function and if we run the 
    function first and then console.log(zxc) (i mean line 139)

    Console:
        undefined   line 135
        Samsung     line 138
        Apple       line 142
*/

var zxc = "Apple" // here var is global scope
function myfunction_03() {
    console.log(zxc)
    var zxc = "Samsung" // here var is function scope
    console.log(zxc)
}
myfunction_03()
console.log(zxc)

/*  
    Mark_04 -> If we remove lines 138 and 139, 
    we will see this result in the console.

    Console:
        Asus   line 160
        Asus   line 163

    The same result in both, but Why? 
    Because the variable is global scope on line 159 is correct?
    Then i can use it in function.
*/

var ert = "Asus" // here var is global scope
function myfunction_04() {
    console.log(ert)
}
myfunction_04()
console.log(ert)

/*  
    Mark_05 -> Now when we look at mark_04, 
    we see that console.log in the function doesn't
    give undefined, it takes its value from the 
    global scope, so why does mark_03 give the result of
    console.log inside the function as undefined?

    Console:
        undefined   line 180
        Samsung     line 182
        Apple       line 185
*/

var yui = "Apple" // here var is global scope
function myfunction_05() {
    console.log(yui)
    var yui = "Samsung" // here var is function scope
    console.log(yui)
}
myfunction_05()
console.log(yui)