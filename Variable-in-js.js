
var name;           // Declaration
name = 'santosh';   // Initialization

var lastName = "Yadav";   // Declaration & Initialization both at one place

// We can Initialize Strings as "" (Double Quote) as well as using ''(Single Quote) also

var num = 10;
console.log(num);   // print 10

num = false;
console.log(num);   // print false

var a;
console.log(a);     // print undefined
// because variable "a" is not Initialize yet i.e I have not given value to it

a = 5;
console.log(a);     // now print 5 because a is initialized now


// *********************************** typeof ***************************

var container;
console.log(typeof container);    // print undefined

container = 10;
console.log(typeof container);    // print integer

container = "Santosh";
console.log(typeof container);    // print string

container = true;
console.log(typeof container);    // print boolean