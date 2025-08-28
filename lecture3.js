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
*/

// do while
// do{
//     // stetment
// }while(condition);
i = 0;
do{
    console.log("test",i);
    i++;
}while(i <= 5);