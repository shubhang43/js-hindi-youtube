//Immediately Invoked Function Expressions (IIFE)

(function chai(){
   //named IIFE
    console.log(`DB CONNECTED`);
})(); // we have to explicitly end the line by applying semicolon(;) so that other function could work.

// ()() //first paranthesis where we write function definiton 
// second paranthesis is used for execution
(  (name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('shubhang')
// when we have to write two IIFE together we have to write semicolon like I have applied at the end of first function so that other funciton could work.
// => arrow function