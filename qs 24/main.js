"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
let car = "subaro";
let age = 20;
let number = [1, 2, 3, 4, 5];
//test with Equality (true )
console.log("is car == to 'subaro'? i predict true.");
console.log(car == 'subaro');
//test with equality (false)
console.log("is car === 'subaro'? i predict false.");
console.log(car === 'corolla');
//test with inequality (true)
console.log("is car != to 'corolla'? i predict true.");
console.log(car != 'corolla');
//test with inequality (false)
console.log("is car !== to 'subaro'? i predict false.");
console.log(car !== 'subaro');
//function to lowercase(true)
console.log("Is car.lowercase() == to 'subaro'? i predict true.");
console.log(car.toLowerCase() == 'subaro');
//function to lowercase(false)
console.log("Is car === car.tolowercase()? i predict false.");
console.log(car !== car.toLowerCase());
//numerical test(true)
console.log("is age == to 20? i predict true.");
console.log(age == 20);
//numerical test (false)
console.log("is age = to 30? i predict false.");
console.log(age == 30);
//greater than(false)
console.log("is age > 30? i predict true.");
console.log(age > 30);
//less than or equal (true)
console.log("is age <= 20? i predict true.");
console.log(age <= 20);
//test AND (true)
console.log("age > 10 && age < 30? i predict true.");
console.log(age > 10 && age < 30);
//test OR (false)
console.log("age < 10 || age > 30? i predict true.");
console.log(age < 10 || age > 30);
//ARRAY (true)
console.log("is 4 in number? i predict true.");
console.log(3 in number);
//ARRAY (false)
console.log("is 6 is not in numbers? i predict true.");
console.log(6 in number);
