// There are two types of Data Types in JS
// 1. Primitive DataTypes    2. Non-Primitive Data Types

// number : Primitive Data Type. Used to store both Integer and Decimal values unlike JAVA which has int and float.

var marks = 100;
console.log(typeof marks);   // print number

marks = 100.02;
console.log(typeof marks);   // also prints number

// what is the min and max values that we can store in a variable in JS

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


// **************************** String ************************
// String: primitive Data Type. Bunch of Characters.
// In JS there is nothing called as characters data type everything is considered as String.

var s = "";
console.log(typeof s);                // print string

var string = 'a';
console.log(typeof string);    // print String

var myName = "Santosh";
console.log(typeof myName);    // print String


// ******************************* Boolean ********************
// Boolean: Primitive Data Type. used to Store true or false;

var isStudent = false;
console.log(typeof isStudent);   // print boolean

isStudent = true;
console.log(typeof isStudent);   // print boolean

isStudent = 0;


console.log('' == false);   // Empty string equivalent to false boolean type
console.log(0 == false);    // 0 is equivalent to false boolean type 


// *************************** Undefined ************************* 
// Undefined: Primitive Data Type. Special type of Data Type in Js used to assign Default value of Variables. 

var newVar;
console.log(newVar);         // print undefined
console.log(typeof newVar);  // print undefined


// ****************************** Null *******************************
// Null: Primitive Data Type. When we don't want that JS give defualt value to our variable when we don't know what type of value should we give to our varible then we can use null.
// Null is explicit assignment of value nul to a variable.

var nullVar;
console.log(typeof nullVar);   // print undefined because I have not given any value to nullVar.

nullVar = null;
console.log(typeof nullVar);   // print object because It is Bug (Exception) in JS. It is not removed yet because if removed then lot of pre-written codes are messed up.
console.log(nullVar);


// ***************************** BigInt **************************
var largeNum = 100000000000000000000000000000n;
console.log(largeNum);
console.log(typeof largeNum);  // print bigint

// another way of defining a BigInt number
var n = BigInt('10000000000000000000000000000');
console.log(n);
console.log(typeof n);  // print bigint

console.log(largeNum + n);
console.log(100000000000000000000000000789n + 2n);    // have to write n at last of both BigInt No.s to perform add operation on them


// ******************************* Symbol ****************************
// Symbol: primitive data type. Used to create Unique variables(literals) of same data.

var student1 = "Santosh";
var student2 = "Santosh";

console.log(student1 == student2);  // print true because both are same

// now use symbol to create two strings
student1 = Symbol("Santosh");
student2 = Symbol("Santosh");

console.log(student1 == student2);  // print false because both variables are unique
console.log(student1,student2);


// ***************************** Objects ***********************
// Objects: Non-primitive Data Type. Used to store data in Key Value format.

var student = {name: "santosh", age:22, marks: 89};
console.log(typeof student);    // print object
console.log(student);           // print whole object with {} (curly braces)
console.log(student.name);
