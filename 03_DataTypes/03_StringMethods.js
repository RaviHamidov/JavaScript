// JavaScript String Methods & Properties
// JavaScript string (primitive or String object) includes default properties and methods which you can use for different purposes.

const str = " ";
const str1 = "I";
const str2 = "like";
const str3 = "a";
const str4 = "Pizza";
const str5 = "I like a Pizza";
const str6 = "Türk ,Pizzə ,PhySiCs ,MathEMatics ,pIzZə ,Burger ,MaTH ,BuRgEr ,MaP ,math ,PhY ,məth";
const strArray = ["I", "like","a" ,"Pizza"];

// String Properties

// -> Length
console.log(str5.length);

// Strign Methods

// -> charAt()
console.log(str5.charAt(3));

// -> charCodeAt()
console.log(str5.charCodeAt(6));

// -> concat([])
console.log(str.concat(str1, str2, str3, str4 ,["but it will be hot ;)"]));

// -> indexOf()
console.log(str5.indexOf("Pizza", 4));

// -> lastIndexOf()
console.log(str5.lastIndexOf("Pizza"));

// -> localeCompare()
console.log(str1.localeCompare(str2));

// -> match()
console.log(str6.match("Pizza"));
console.log(str6.match(/math/gi));
console.log(str6.match(/math/g));
console.log(str6.match(/math/));

// -> replace()
console.log(str5.replace("Pizza", "ThreeSisterDolma"));

// -> search()
console.log(str5.search("Pizza"));

// -> slice()
console.log(str5.slice(-7, -1));
console.log(strArray.slice(2, 4));

// -> split()
console.log(str5.split(" "));

// -> substr()
console.log(str5.substr(2, 5)); // Deprecated

// -> substring()
console.log(str5.substring(1, 8));

// -> toLowerCase()
console.log(str5.toLowerCase());

// -> toUpperCase()
console.log(str5.toUpperCase());

// -> toString(), valueOf()
console.log(str5.toString()); // This example
console.log(str5.valueOf()); // same as with this
console.log(str5); // and this