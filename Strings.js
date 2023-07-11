// We can write Strings in '' (single Quote) or ""(Double Quote) in JS. but for best practise single quote is preferred. In Js everything stored as 0 and 1(Binary format).

var str = 'abc';

console.log(str); //print abc

console.log(str.length);   // pring size of string

//Strings : arrays of characters.
// we can access string characters as we access array elements in js

console.log(str[0],str[1]);

// we can also access string characters by charAt() method
console.log(str.charAt(1));

// In JS every String is stored as ASCII value and ASCII is further converted into Binary format for storing.
// to get ASCII code of any character of string
console.log(str.charCodeAt(0));  // print ASCII code of character present on a index specified

console.log(Object.getPrototypeOf(str));

// ******************************* Concatination *********************

var s1 = 'abc';
var s2 = 'xyz';

console.log(s1 + s2); // Operator Overloading. This will concatinate two strings
console.log(s1+" "+s2);   // add space between s1 & s2 while concatinating

// there is inbuild function for cancatinating two strings
console.log(s1.concat(s2));
console.log(s1.concat(' ',s2));   // add space between s1 & s2 while concatinating


// If I want to check if my string endsWith some string
str = "I am learning String in Session";

// to check if above string endswith with 'ion'
console.log(str.endsWith('ion'));  // print true

console.log(str.endsWith('axyx'));  // print false 

// I can also check if String starts with some string
console.log(str.startsWith('I'));   // print true;
console.log(str.startsWith('i'));  // print false because string starts with capital "I"
console.log(str.startsWith('Ia')); // print false because there is space between "I" & "a"


// I can also check if substring is present in a string or not
console.log(str.includes('ning')); // print true;


// To index of substring present in above string or not
console.log(str.indexOf('ing'));  // print 10 from where substring starts
// only returns index of first substring matches in string


// to get lastIndex of subString present in string
console.log(str.lastIndexOf('ing'));  // returns last index of substring matches in string


// ********************* Split() ********************
// to split m string into small parts we use split() function

str = 'I am Santosh Learning JS';

console.log(str.split(' '));   //split string based on space

console.log(str.split(""));   //split string based on characters becuase specified in the split() function

console.log(str.split(","));   // try to split string based on comma but there is no comma so returns whole string 
                                // as it is. If there is comma then split based on comma

// If I want to replace some character of string
str = "I am, Santosh, Learning, JS";
console.log(str.replace(",",""));  // replace only first occurance of specified character

// console.log(str.replaceALL(",","")) // replace all occurance of comma in a string

// to get a part of a Sring i.e substring
console.log(str.substring(4));     // return all the string from index 2
console.log(str.substring(2,13));  // returns string from index 2 to index 13


// Remove all the spaces from start and end of the string
str = "    abc   xyz   ";
console.log(str.length);
console.log(str.trim());  // removes only starting and ending space
console.log(str.trim().length);


// ************************** Regular Expression ************************
str = "this is simple string which is good";

console.log(str.match('is'));  // only return first match of 'is'

var regex = /is/;     // this will not give all occurrance. only returns first occurrance
regex = /is/g;        // I have to specify g for getting all occurrances of 'is'. 
// Here is 'g' is global flag which tells match function to search for 'is' in whole string not first match
console.log(str.match(regex));

str = "I am, santosh, learning";

console.log(str);

// Now I want to remove all the commas
console.log(str.replace(/,/g,""));  // all the commas are removed with empty character


str = "This is Simple String which is goood, Is, iS, IS";
regex = /is/g;   // this is only search for lowercase 'is' in string
console.log(str.match(regex));

// If I want to search for case incensetive search then I have to specify one more flag in regex

regex = /is/gi;    // here 'i' is incensetive flag for case incensetive search of 'is'

console.log(str.match(regex));   // print all 'is'
console.log(str.match(regex).length);  // print count of 'is' present in string 

regex = / /g;   // count no of spaces + 1 = no of words in a string
console.log(str.match(regex).length);


// If I want to search for all vowels then I have to create a group of vowels using square brackets
regex = /[a,e,i,o,u]/g;
console.log(str.match(regex));


// If I want to find a word that starts with vowel and second character should be 'n'
regex = /[a,e,i,o,u]n/g;
console.log(str.match(regex));  


// If I want to find 0 to 9 digits in a string then I can use
str = "I am 900 Sato0sh 93030 200";
regex = /[0-9]/g;
console.log(str.match(regex));       //['0','1','3','9']
console.log(str.match(regex).length);


// I want to search for word that has 'is' and 'in' init then I can use Round Brackets()

str = "I am Learning Js for Fun. It is very Interesting";

regex = /i(s|n)/gi;             // I cannot put space after s and n

console.log(str.match(regex));  // ['in','is','in','in']


var words = ['one','two','three','four'];

words.forEach(function(word) {
    console.log(word);
    if(word ==='two') words.shift();
});


// array.every() == array.forEach() both functions works as same go to every index and print output

var arr = [60,50,20,10];  // every element should be greate then 5

const test1 = function(x) {   
    return x > 5;
}

if (!arr.every(test1)) {        // go to every index and check if finds andy ele less than 5 then statement 1 is printed
    console.log("statement 1");
}else {
    console.log("statement 2");
}

// every() function works as AND (&) condition if any element of array is less than 5 then It will print false
// some() function works as OR(||) condition if all elements are less than 5 then It will print false if any one Element is greate than five then It will print true;

array = [ 60, 70, 20, 5, 40, 90 ];

const test = function(x) {
    return x > 5;
}

if(!array.some(test)) {
    console.log("statement 1"); 
}

else {
    console.log("statement 2"); 
}


// How to select all the characters from a sentence or paragraph
str = "Lorem ipsum dolor sit, amet consec233etur adipisicing elit. Necessitatibus illum quia quibusdam iure pariatur earum accu234234samus  332 error, eius ullam volup3030tatibus."

regex = /\w+/g;                       // for counting words in para. also counts the digits as words

console.log(str.match(regex));        // print all the words in str para
console.log(str.match(regex).length); // print count of all words in para

regex = /\w/g;                         // for counting character. also counts the digits as characters

console.log(str.match(regex));         // print every character of para
console.log(str.match(regex).length);  // print count of all character in para


// for Counting digits only from para
regex = /\d/g;                         // for counting every sigle digit
console.log(str.match(regex));         // print only digits from para
console.log(str.match(regex).length);         // print only count of digits from para

regex = /\d+/g;                  // + for counting digits those are together as words


// count all the words those only have 4 to 6 characters in it
regex = /\w{4,6}/g;
console.log(str.match(regex));       // print all the words which has 4 to 6 characters in it
console.log(str.match(regex).length);


regex = /\d{3,5}/g;    // choose all the numbers which has 3 to 5 digits in them
console.log(str.match(regex));
console.log(str.match(regex).length);

// If want to check If a String starts with some particular word or not then I can use below Regex. 
// In below regex I am checking that if String starts with 'This' Or 'The' Or 'the'

str = "The This is the best JS course I have learned the The";

regex = /^(This|The|the)/g;
console.log(str.match(regex));


str = "1020384394782379";
regex = /\d{10}/g;       //This regex only selects starting 10 digits from above string else digits are ingnored

console.log(str.match(regex));


str = "I am learning Jsis in fun way Is is";
regex = /is$/g;                            // This checks if word endswith 'is' or not
console.log(str.match(regex));

str = "I am doiam totam sam lam";

regex = /.am/g;    // selects the words that has 1st character anything but 2nd and 3rd char should be 'am'
console.log(str.match(regex));


str = "I taaammm toammmmm tooammm saaam saammm";

regex = /.am+/g;   //selects the words that has 1st character anything but 2nd character should be single 'a' and 3rd character can be one or multiple 'm'. Here + denotes multiple group of same characters
console.log(str.match(regex));

regex = /.a+m+/g;  //selects the words that has 1st character anything but 2nd character can be one or multiple 'a' and 3rd character can be one or multiple 'm'. Here + denotes multiple group of same characters
console.log(str.match(regex));