// Debugging : is the process of finding out how does the code is working internally.
// One way: we can use console.log() statements to debug our program.

var a = 10;

// Declaring the function
function add(a,b) {
    console.log("A",a);
    console.log("B",b);

    var c = a+b;
    console.log("C",c);
    return c;
}

console.log(a);
console.log(add(10, 34));
console.log(add(12));     // Here I am not passing 2nd variable so It will give Output as "Nan". so I can debug my porgram using console.log() statement to see where the problem is. 


// Second way: Debugging the program is using debugger.

debugger;
var a = 10;

// Declaring the function
function add(a,b) {

    debugger;
    var c = a+b;
    debugger;
    console.log("C",c);
    return c;
}

console.log(a);
console.log(add(10, 34));
console.log(add(12)); 

// to see output correctly use 




// Asynchronous program
function callBack() {
    console.log("Say Hello");
}

function sayHello(callBack) {
    // This is Asynchronous Function and through this function I am calling callBack Function
    setTimeout(callBack, 3000);
    // this callBack() function will be saved inside Even Queue and after 3 sec when Web API tells JavaScript that 3 sec time is over then callBack() function is moved into CallStack of JS Engine and then called by JS
    
    console.log("After the CallBack function"); // This line is printed before callBack function 
}

sayHello(callBack);

console.log("Written after the sayHello() function calling");

 a = 0;
while (a < 100) {
    console.log("HiiiIIIIIII");
    a++;
}