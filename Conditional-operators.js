// Conditional Operator: ?

var marks = 80;

marks > 33 ? console.log("Pass") : console.log("Fail");

// Type Conversion: JS Implicitly convert data type in case of arithmetic operations.

// Type Cohesion: The Phenomena of type conversion in case of arithmetic operations is called as type cohesion.

console.log(1+1);     //2
console.log('1'+1);   //'11'
console.log('1'+'1'); //'11'
console.log('1'-'1'); //0
console.log('1'-1);   //0
console.log('10'*5);  //50
console.log('90'/9);  //10
console.log('90'%9);  //0
console.log('abc'+9); //'abc9'
console.log('90'-9);  //81

console.log(1 == 1.0);   // true
console.log(1 === 1.0);  // true
console.log(2 | 1);     // 3
console.log(2 & 1);     // 0


console.log(10 && 13);   // 13 second no is returned as 10 and 13 both considered true
console.log(0 && 13);    // 0 because 0 = false and 13 = true but false && true = false so ans = 0
console.log(13 && 0);    // 0 because 0 = false and 13 = true but false && true = false so ans = 0
