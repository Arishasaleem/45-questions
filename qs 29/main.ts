//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that 
//check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
// the if block should print a statement, such as You really like bananas!

const favorite_fruits: string[] = ["apple", "banana", "mango"];
if(favorite_fruits.includes("banana")){
    console.log("You really like bananas!")
}

if(favorite_fruits.includes("Apple")){
    console.log("You really like an Apple")
}

if(favorite_fruits.includes("peach")){
    console.log("You really like an peach.")
} else{
    console.log("peach are not in a favorite list.")
}

if(favorite_fruits.includes("mango")){
    console.log("You really like mangoes")
}

if(favorite_fruits.includes("strawberry")){
    console.log("You really like strawberries")
} else{
    console.log("stawberries are not in a favorite list.")
}
