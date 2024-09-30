//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//•  stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let somePlaces: string[] = ["zoo", "maldives", "lyari", "naval", "clifton" ];
console.log("original "  + somePlaces);

//Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order:", [...somePlaces].sort());

//Show that your array is still in its original order by printing it.
console.log("original order just used sorting:", somePlaces);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order:", [...somePlaces].sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log("original order after reversing:", somePlaces);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
somePlaces.reverse();
console.log("back to original order:", somePlaces);


//stored in alphabetical order. Print the array to show that its order has been changed.
somePlaces.sort();
console.log("in alphabetical order:", somePlaces);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
somePlaces.reverse();
console.log("reverse alphabetical order", somePlaces);