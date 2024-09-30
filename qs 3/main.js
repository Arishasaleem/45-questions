"use strict";
//3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
//lowercase
let myName = "Arisha saleem";
console.log("lowercase:", myName.toLowerCase());
//upper case
console.log("uppercase:", myName.toLocaleUpperCase());
//titlecase
console.log("titlecase:", myName.replace(/\bw/g, c => c.toUpperCase()));
