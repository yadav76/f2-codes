
// take 40s
function pageLoad(){}

// take 4s
function changeBackground() {}

// take 4ms
function changeText(){}

pageLoad();
changeBackground();
changeText();

// In Js programe execution is by Default Synchronous so first pageLoad() function will be executed then changeBackground() then changeText() No matter what changeText() take 4ms very much less time as compare to other two functions It will be executed last because it is called at last.

// But in Async Programming the function which take less time will be executed first no matter where it is called. It is called at starting or end. Async programming used to make application executinon faster. 


// callback function for web API
// function printHello() { console.log("Hello World"); }

// setTimeout(printHello,3000);    // printHello function will be called after 3 seconds
// console.log("HIi");

// Here setTimeout(); is a Web API. All the Web API's are treated as Asynchronous function in js and all webApI's will atlease take one parameter as callback function name. 

// The above callBack function and setTimeout Web Api can also written as

// Here I don't need to write function name also.
// setTimeout(function (){
//     console.log("Hello World");
// },3000);
// console.log("Hii");


// I can also write nested setTimeout() function also
// setTimeout(function (){
//     console.log("Hello World");
//     setTimeout(function (){
//         console.log("I am executed after 2 Sec of Hello World");
//     },2000)
//     console.log("after 2 seconds")
// },3000);
// console.log("Hii");


// Guess output of below Program
setTimeout(function (){
    console.log("Hello World");   //2nd
    setTimeout(function (){
        console.log("I am executed after 2 Sec of Hello World");   //4th
        setTimeout(function (){
            console.log("After 7 seconds");   //6th 
        },5000)
        console.log("Before 7 Seconds");    //5th
    },2000)
    console.log("after 2 seconds");    //3rd
},3000);
console.log("Hii");    //1st