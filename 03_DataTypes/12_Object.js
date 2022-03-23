/*In JavaScript, an object can be created in two ways: 
1) using Object Literal/Initializer Syntax 
2) using the Object() Constructor function with the new keyword. 
Objects created using any of these methods are the same.*/

var p1 = {
    name: "Steve"
}; // object literal syntax

var p2 = new Object(); // Object() constructor function
p2.name = "Steve"; // property

// Creating object with literal syntax

// Object with no method or properties
var emtyObject = {}

// Object with single property
var person = {
    brand: "Apple"
}

// Object with single method
var message = {
    showMessage: function (val) {
        alert(val);
    }
}

// Object with single method & properties
var personOne = {
    first: "Teen",
    last: "Wolf",
    age: 33,
    getFull: function () {
        return this.first + " " + this.last
    }
}

/* Note that the whole key-value pair must be declared. 
Declaring only a key without a value is invalid, as shown below. */

// var person = { firstName };

// var personTwo = { getFullName: };

// Another way with Create Object with using Object() Constructor

var person = new Object();

// Attach properties and methods to person objects
person.firstName = "Jonny";
person.lastName = "Cage";
person.age = 33;
person.getFullName = function () {
    return this.firstName + "" + this.lastName;
};

var first = "Jack";
var last = "Mirror";

var full = {
    first,
    last
}

var person = {
    firstNickName: "Black",
    lastNickName: "Mirror",
    age: 33,
    getFullNickName: function () {
        return this.firstNickName + " " + this.lastNickName
    }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - // 
var p1 = new Object();
p1.firstName = "first";
p1.lastName = "last";
p1.age = 33;

var p2 = new Object();
p2.firstName; // undefined
p2.lastName; // undefined
p2.age; // undefined

p3 = p1 // assigns object
p3.firstName // first
p3.lastName // last
p3.firstName = "firstchange"; // assigns value
p3.lastName = "lastchange"; // assigns value

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - // 
var person = new Object();
person.firstname = "James";
person.lastname = "Bond";

for (var prop in person) {
    console.log(prop); // access property name
    console.log(person[prop]); // access property value
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - // 
function changeName(way) {
    way.firstName = "Steve"
}

var person = {
    firstName: "Bill"
}

changeName(person);
console.log(person);

// Nested Objects

var person = {
    firstName: "First",
    lastname: "Last",
    age: 33,
    adress: {
        id: 1,
        country: "UK"
    }
};

person.adress.country; // returns "UK"

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# JavaScript object is a standalone entity that holds multiple values in terms of properties and methods.

# Object property stores a literal value and method represents function.

# An object can be created using object literal or object constructor syntax.

# Object literal:
    var person = { 
        firstName: "James", 
        lastName: "Bond", 
        age: 25, 
        getFullName: function () { 
            return this.firstName + ' ' + this.lastName 
            } 
    };

# Object constructor:
    var person = new Object();
                        
    person.firstName = "James";
    person["lastName"] = "Bond"; 
    person.age = 25;
    person.getFullName = function () {
            return this.firstName + ' ' + this.lastName;
    };

# Object properties and methods can be accessed using dot notation or [ ] bracket.

# An object is passed by reference from one function to another.

# An object can include another object as a property.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */