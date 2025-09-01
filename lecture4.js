// Arrays in javascript

/*
// let heroes = ["ironman", "hulk", "thor"];
let info = ["rahul", 98, "delhi"];
let marks = [90, 98, 94, 88, 92];

console.log(heroes);
console.log(marks.length);
console.log(info[0]);

// Array Indices..............

marks[3] = 93; // only possible in arrays (mutable)
heroes[2] = "spiderman";
console.log (marks); // not possible in string (immutable)
console.log (heroes); 

let heroes = ["ironman", "hulk", "thor", "spiderman", "antman", "warmachine"];

for (idx = 0; idx <heroes.length; idx++){
    console.log("index :",idx,heroes[idx]);
}

for ( hero of heroes){
    console.log(hero.toUpperCase());
}


// practice Question,
//Q1. for a given array with marks of student -> [85, 97, 44, 37, 76, 60] find the average marks of the entire class.

let student = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (i = 0; i < student.length; i++){
    sum = sum + student[i];
}

let average = sum / student.length;

console.log("the average marks of the entire class is :",average);

// method 2..........
for (val of student){
    sum += val;
}
avg = sum / student.length;
console.log(`the average marks of the entire class is ${avg}`);

// Q2 for a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% Off on them. change the array to store final price after applying offer.

let product = [250, 645, 300, 900, 50];
let i = 0;

for (let val of product){
    console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    product[i] = product[i] - offer;
    console.log(`value after offer ${product[i]}`);
    i++;
}

// second method.............
for (i = 0; i < product.length; i++){
    console.log(`origanal price: ${product[i]}`);
    offer = product[i] / 10;
    product[i] -= offer;
    console.log(`after 10% off:${product[i]}`);
}
console.log(product);


// array methods......................................

// Push() : add to end
// Pop() : delete form end & return 
// toString() : converts array to string
// concat(arry name) : joins multiple arrays & returns result
// unshift(): add to start
// shift() : delete from start & return
// slice( startIdx, endIdx) : returns a piece of the array  
// splice( startIdx, delCount, newEl) : change original array (add, remove, replace)

items1 = ["bagpack", "notebooks", "compos", "testbook", "ruffBook"];

items1.push("pencil","pen","sharpner"); // add items
console.log(items1);

Ritem = items1.pop(); // delete last items in array and print it 
console.log( Ritem,"and",items1);

console.log(items1.toString()); // array to string
*/
// let marvelHeros = ["iromma", "warmachine", "thor", "spiderman"];
// let dcHeros = ["superman", "bateman", "flash"];

// allheros = marvelHeros + dcHeros;
//  allheros = marvelHeros.concat(dcHeros);// connnect arrays create new array

// addHero = dcHeros.unshift("x-man"); // add element to start
// RemHero = marvelHeros.shift() // delete first element 

let heroes = ["iromma", "warmachine", "thor", "spiderman", "superman", "bateman", "flash"];

// cutterArr = heroes.slice(1, 5);
cutterArr = heroes.slice(4);


console.log (cutterArr ,heroes);