// create an array

var array = ["RD Sharma", "RS Agarwal", "Chemistry"];

console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

// Get length of the array
console.log(array.length);

// Another ways to create arrays in js
var newArr = new Array();    // size is not defined
var newArr1 = new Array(10);  // array size is 10

console.log(newArr);   // print []
console.log(newArr1);  //print [ <10 empty itmes> ]

console.log(newArr.length);
console.log(newArr1.length);


let arr1 = ['a','b','c'];

// add values at end of array
arr1.push('z1');
arr1.push('z','y');
console.log(arr1);

// add values at the start of array
arr1.unshift('b0');
arr1.unshift('a1','a2');
console.log(arr1);


// Remove elements from array
arr1.pop();
console.log(arr1);   // One last ele deleted

// Remove element from start
arr1.shift();
console.log(arr1);   // One element from start deleted

// Remove elments from any position
arr1.splice(4,1);   // 1st argument is index from which element is deleted and 2nd argument for how many ele should deleted
console.log(arr1);

arr1.splice(4);  // If I don't pass 2nd argument then all ele after 4th index are deleted
console.log(arr1);


// shift() and unshift() will take O(N) TC because this both function Delete and add value at start of array
// pop() and push() wil take O(1) TC because this both function Delete and add Values at end

// How to remove and add Elements from specific position
arr1.splice(2,2,"santy","yadav","random");    //this will remove 2 elements from 2nd index and add 3 specified values at from 2nd index
console.log(arr1);

arr1.splice(3,0,"santosh");   // Here 2nd argument I have passed 0 so 0 Elements are delete and "santosh" is added at 3rd index


// splice() function need 3 arguments 1st is compulsory and 2nd and 3rd are optional

console.log(arr1);


var marks = [1,2,2,330,40];
// Here marks store the address of array present at memory. i.e variables store reference of objects 

var marks2 = marks;
// Here both marks and marks2 store same address. so If I make any change in marks then it will be shown in marks2 also

marks2[2] = 45;
console.log(marks);
console.log(marks2);

console.log(marks == marks2 && marks === marks2); //print true

console.log([] == []);  // print false
console.log([] === []); // print false
// above both statements print false because both arrays are new and point to difference memory location

var a1 = [];
var a2 = [];

console.log(a1 == a2 || a1 === a2);  // print false
//becuause a1 and a2 point to difference memeory location

// Iterating values in array

var array = [1,2,2,3,4,4,7,8];

for (var i=0; i<array.length; i++) {
    console.log(array[i]," ");
}

// another way
for (var value of array) {
    console.log(value," ");
}

// for getting indexes of every array elements
for (var index in array) console.log(index);

// for getting index and value of array elements
for (var index in array) console.log(index,"  ",array[index]);

// of == value of elements in array
// in == index of elements in array


// Another way of Iterating array Items using forEach()
// forEach() : is Higher Order Function.
// for forEach() I have to create a function first to pass as parameter in forEach()


// In Js no need to write var keyword with function parameters. Need to write value first and index after
function printArrayItems(value, index) {
    console.log(index," ", value);
}

array.forEach(printArrayItems);  
// Here forEach() go to every index of array and read the value at that index and then pass both index and value to 
//printArrayItems(value, index) function and rest is done by printArrayItmes() function.


// ******************************************* Sorting ************************************ 
array.sort(function (a,b) {return a-b});   // Does Ascending Sorting
console.log(array);

array.sort(function (a,b) {return b-a});   // Does Descending Sorting
console.log(array);


// My own compare function
function compare(a,b) {return a-b;}

array.sort(compare);  // Here I can pass my own compare function for Ascending sorting
console.log(array);

// to check wheater a element present in array or not
console.log(array.includes(4));  // print true



// ***************************** filter() ***************************



// ***************************** Map()  ******************************** 