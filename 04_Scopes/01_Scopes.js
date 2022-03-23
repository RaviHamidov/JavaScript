/*
    # Scope in JavaScript
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
    function first and then console.log(zxc) (i mean line 106)

    Console:
        undefined   line 58
        Samsung     line 60
        Apple       line 63
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
    Mark_04 -> If we remove lines 57 and 60, 
    we will see this result in the console.

    Console:
        Asus   line 80
        Asus   line 83

    The same result in both, but Why? 
    Because the variable is global scope on line 78 is correct?
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
    Pls ReSearch Hoisting, This keyword may be useful for more information ;)

    Console:
        undefined   line 101
        Samsung     line 103
        Apple       line 106
*/

var yui = "Apple" // here var is global scope
function myfunction_05() {
    console.log(yui)
    var yui = "Samsung" // here var is function scope
    console.log(yui)
}
myfunction_05()
console.log(yui)

/*
   > General in brief
   
   First let me tell you what a block is curly braces everything you see is a block
   Then an "if" is block? Yes
   "For" is also a block? Yeap
   What about function?

   If var, let or const is defined inside a function, it is a function scope.
   But if var is defined outside the function, it is a global scope, But if let and const are 
   defined outside the function, that isn't defined outside of any block or 
   a function, then it is also a global scope, but when let and const are inside a block, 
   they both become a block scope, that is cannot be accessed from outside the block.
*/

/*  
    Mark_06 -> For example, here we can reach the variable because it has a global scope.
*/

const zodiac = "Scorpion";
console.log(zodiac);

/*  
    Mark_07 -> For example, here we can't reach the variable because it has a block scope.
*/

{
    const zodiac = "Scorpion";
}
console.log(zodiac);

/*  
    Mark_08 -> The difference between var and let, const is that we can assign
    a value to var, usee it, and then define it.
*/

x = 33;
console.log(x);
var x;

/*  
    Mark_09 -> We can neither assign nor use before defining in Let.
*/

y = 33;
console.log(y); // Error
let y;

/*  
    Mark_10 -> So what's the difference between let and const?
*/

// let -> Mutable (For this reason, We can define let and then assign a value to it and use it.)
let k;
k = 33;
console.log(k);

// const -> Imutable (But I can't do in const what is in le't because I have to set a value by default)
const j = 42;
console.log(j);

const i = 42;
i = 33;
console.log(i); // This is Error you can't redeclared this 

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// Well can const be a variable? Yes, But in what situations? 
// If they contain an object or an array, they are mutable. For example:

const user = {
    name: "Clever"
}

user = {
    name: "Stupid"
}

console.log(user); // This is Error, Why because in this example we want to add new value, it's wrong

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// But we can change a property inside the object. For example:

const human = {
    name: "honest"
}

human.name = "friendly" // Yes that's way is correct

console.log(human); // When we run this, we can see that a property has changed within the object. 

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// Sometimes we don't want change property, We can use freeze this situation. For example:

const  customer = {
    name: "poor"
}

Object.freeze // When we use freeze feature, Object's property isn't change

customer.name = "rich"

console.log(customer);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// Sometimes we want change Property, But don't want to add Property, We can use seal feature this situation. For example:

const  car = {
    name: "Volvo"
}

Object.seal

car.name = "BMW"
car.year = 1999 // In the Result this will not be added because property cannot be added but what is added can change

console.log(car);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// Allright what about arrays. In this example you will see change array's inside:

const brands = ["iphone", "samsung", "motorola"]

console.log(brands)
brands.shift()
console.log(brands)
brands.push("Nokia")
console.log(brands)

brands = ["Jbl"] 

console.log(brands) // This is Error, Array can be changed but not assigned as in the sample

// Points to Remember :

// > JavaScript has global scope and local scope.
// > Variables declared and initialized outside any function become global variables.
// > Variables declared and initialized inside function becomes local variables to that function.
// > Variables declared without var keyword inside any function becomes global variables automatically.
// > Global variables can be accessed and modified anywhere in the program.
// > Local variables cannot be accessed outside the function declaration.
// > Global variable and local variable can have same name without affecting each other.
// > JavaScript does not allow block level scope inside { } brackets.