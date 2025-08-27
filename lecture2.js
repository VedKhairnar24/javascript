
// comment's............................

// single line comment

/* multi-line comment's
like given example */

// Operators in javascript..............

/* use to perform some Operation on data

A => operands
+ => operator

// Arithmetic operators
+, -, *, /

* Modulus
* Exponentialtion
* Increment
* Decrement

*/

// Ex. Arithmetic Operators
/*
let a = 5;
let b = 4;
console.log ("a =>",a , " b =>" ,b)
console.log("a + b =>",a + b); 
console.log("a - b =>", a - b);
console.log("a * b =>", a * b);
console.log("a / b =>", a / b);
*/
// console.log("a % b =>", a % b); // Modulus(modulo) reamainder

// Exponential
/*
Number1 = 5;
power = 2;
console.log("Number ** Power =>", Number1 ** power); // for power 5^2
*/

// Unary Operator
/*
let testNum1 = 10;

pre-increment
++testNum1;
console.log("pre-increment ++a", testNum1);

let testNum2 = 10;
// pre-decrement
--testNum2;
console.log("pre-decrement --a", testNum2);

let testNum3 = 10;
// pre-increment

console.log("post-increment", testNum3++);
console.log("post-increment a++", testNum3);

let testNum4 = 10;
// pre-decrement

console.log("post-decrement ", testNum4--);
console.log("post-decrementa--", testNum4);
*/

// Assignment Operatores

// =, +=, -=, *=, %=, **=
/*
a = 5;
console.log("a =>",a); // a = 5

 a += 4;
console.log("a +=>",a); // a = a + 4

a -= 4;
console.log("a =->",a);// a = a - 4

a *= 4;
console.log("a *=>",a);// a = a * 4

a %= 4;
console.log("a %=>",a);// a = a % 4

a /= 4;
console.log("a /=>",a);// a = a / 4

a **= 4;
console.log("a **=>",a);// a = a ** 4
*/

// Comparison Operators............
/*
== >> Equal to
=== >> Equal to & Type
!= >> not Equal to 
!== >> not Equal to & type
> >> gretor than
>= >> gretor than equal to 
< >>  less than
<= >> less than equal to

*/

// Logical Operators
/*
Logical And >> &&
Logical OR >> ||
Logical NOT >> !
*/

// Conditional Statement 
/*
.................................if if Statement
if (condition){
    Statement
}
if (condition){
    Statement
}

.................................if else Statement

if (condition){
    //Statement
}
else{
    //Statement
}
.................................if else if Statement and nested if else if else

if (condition){
   // Statement
}
else if (condition){
   //Statement
}
.................................only if in one line
if (condition) console.log (print)

mode = "dark";
if (mode === "dark") console.log ("Bg is Black");

......................................ex.
let mode = "dark";
let colour; 

if (mode === "dark"){
    colour = "black";
}

if (mode === "light"){
    colour = "white";
}
    console.log("the Backgraund is",colour);
 
let candidate = 22;

if (candidate >= 18){
    console.log("you can vote...!")
}else{
    console.log("you cannot vote...!")
}

let num = 2;

if (num % 2 === 0) {
    console.log(num,"the number is even");
}else{
    console.log(num,"the number is odd");
}

*/

// ................................. ternary Opratore 

// condition ? true output(1) :fales output(2);
/*
compact if-else,simpler
age = 12;

let result = age >= 18 ? "adult" : "not adult";
console.log (result, "is ",age);


const Fruit = "mangoes";
let food;
switch (Fruit){
    case 'papaya':
        food = "papaya";
        break;
    case 'mangoes':
        food = "mangoes";
        break;
    case 'banana':
        food = "banana";
        break;
   default :
        food = "not available"
}
console.log("food is",food);

*/

// alert ("this is pop alert");
// let name = prompt ("what is your name:");
// console.log("your name is", name);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let's practice 
/*
Q.1 get user to input a number using prompt ("Enter a nmber:"). check if the number is a multiple of 5 or not.


let result = prompt ("Enter a Number:");

if ( result % 5 === 0){
    console.log(result,"is a multiple of 5");
}else {
    console.log(result, "is a Not multiple of 5");
}
*/
/*
Q.2 write a code which can give grades to students according to their scores:
*80-100,A
70-89,B
60-69,C
50-59,D
0-49,F

*/
//using if...
// result = prompt ("enter your marks:");
// let grade;

// if (result > 90 & result < 100 ){
//     grade = "A";
// }
// if (result > 80 & result < 89 ){
//     grade = "B";
// }
// if (result > 70 & result < 69 ){
//     grade = "C";
// }
// if (result > 60 & result < 59 ){
//     grade = "D";
// }
// if (result > 0 & result < 59 ){
//     grade = "F";
// }
// console.log ("the grade is :",grade);

// Using Switch case
result = prompt ("enter your marks:");
let grade;

switch (result){
    case (result > 90 & result < 100):
        grade = "A";
        break;
    case (result > 70 & result < 89):
        grade = "B";
        break;
    case (result > 60 & result < 79):
        grade = "C";
        break;
    case (result > 50 & result < 59):
        grade = "D";
        break;
    case (result > 0 & result < 49):
        grade = "F";
        
}
 
console.log ("the grade is :",grade);