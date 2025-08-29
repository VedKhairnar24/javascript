// loop's
/*
for Loop's..........................
for(initialisation; Condition; Updation)

let times;
for (let i = 0; i <= 10; i++){
    console.log(i);
    times = i++;
}

console.log("loops",times, "run");

print number 0 to 100
for ( i = 0; i <= 100; i++){
    console.log(i +" = Number");
}

only even number print 0 to 100

for (i = 0; i <= 100; i++){
    if (i%2 === 0 ){
        console.log("even:", i);
    }
}

add 1 to 50 numbers 
let totalNum = 0; 
for (i = 1; i <= 50; i++){
   totalNum = totalNum + i;
}
console.log("sum of 1 to 50 is ",totalNum);
let sum = 0;
Num1 = Number(prompt("enter the number:"));
for (i = 0; i <= Num1; i++){
    sum = sum + i;

}
let allC = `the sum of 1 to ${Num1} is ${sum}`; 
console.log(allC);

// Infinity Loop : a loop that never ends

for(i = 1; i >= 0; i++){
    console.log("Numbre:",i);
}

// while loop
// create a vairiable
// while(condition){
    // do some work
    //updation
// }
while ()
i = 0;
while (i <= 5){
    console.log(i);
i++;
}

do while
do{
    // stetment
}while(condition);
i = 0;
do{
    console.log("test",i);
    i++;
}while(i <= 5);

// for-of loop.................

let str = "VedKhairnar";
for(i of str){
    console.log("i =",i);
}
// for-in loop in object

let product = {
    id : 1,
    name: "Boll pen",
    price : 30,
    type : "Boll point pen",
    company : "tramaxx"
};

for (let i in product){
    console.log(i,"=",product[i]);
}


// practice Questions
//Q.1 print all even nubers form 0 to 100.

for (i = 0; i <= 100; i++){
    if (i%2 === 0){
        console.log(i);
    }
}


// Q.2 create a game where you start with any random game number until the user enters correct value.
let gameNum = 30;
let userNum = prompt("guess the number:");

while (userNum != gameNum){
    userNum = prompt("try again");

}
console.log("congratulatios.....! \n your Number is :", userNum);


// strings in javascript.........................
// strings is a sequence of characters used to represent text

//create a string
let str = "ved khairnar";

// string length
// str.length;

//string lndices
// str[1],[4];

let dataAll = `the string is ${str} and there length ${str.length} and in 0 and 4 index is ${str[0]}`;

console.log(dataAll);

// templete literals in javascript
// A way to have embedded expressions in strings using `this is templete literal`
//string interpolation
// to create string by doing substitution of placeholders `string text is ${expression}string text`
let dataAll = `the string is ${str} and there length ${str.length} and in 0 and 4 index is ${str[0]}`;

// escepe characters
// /n add new line
// /t add one tab space 

// strings methods in javascript
// these are built-in function to manipulate a string 

//str.toUpperCase()
//str.toLowerCase()
//str.trim() // for remove extra spaces in string


Uppercase = str.toUpperCase();
Lowercase = str.toLowerCase();
trimString = str.trim();

let print = `string in Upper case is ${Uppercase} and in ${Lowercase} and trim string is ${trimString}`;

console.log (print);
// str = "khairnar ved ";
// str2 = "khairnar"
// str.slice(start, end?) //returns part of string
// str1.contact(str2) //joins str2 with str1
// str.replace(searchVal, newVal) 
// str.chartAt(idx)

// console.log (str.slice(0, 8));
// console.log (str.concat (str2));
// console.log( str.replace("ved","vedant"));
// console.log (str.charAt(3));

//Q.1 prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length. ex. @vedkhairnar11

let userfirstN = prompt("enter your first name");
let usersecondN = prompt("enter your Sir name");

userdata = userfirstN + usersecondN;
username = `@${userdata.toLowerCase()}${userdata.length}`;
console.log("User name:",username);
*/
