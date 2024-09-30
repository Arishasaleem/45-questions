//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizzaNames: string[] = ["cheeze pizza","pepperoni pizza","bbq chicken","hawaiian"];
// let print only names of pizza
for(let i = 0; i < pizzaNames.length; i++) {
    console.log(pizzaNames[i]);
}

//printing names of pizza with sentance
for(let i = 0; i < pizzaNames.length; i++) {
    console.log(`i like to eat ${pizzaNames[i]}`);
}
console.log(
    `\n Pizza is one of the world's most popular foods, and for good reason! It's affordable, delicious, and there's something for everyone. And it's not just in pizza joints`
);