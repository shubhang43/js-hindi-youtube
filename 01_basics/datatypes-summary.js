// Primitive datatype

// types 7 : String, Number, Boolean, Null, Undefined, Symbol, BigInt(for very big value)
// Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

//const bigNumber = 3432566677887669378n (BigInt)



// Reference type(non-primitive datatype)

// Array, Objects, Functions (when we try to find out datatype of these it gives function)
// Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

const heros = ["shaktiman", "nagraj", "doga"];
let myObj ={
    name: "shubhang",
    age: 22,
}

const myFunction = function(){
console.log("Hello world");
}

console.log(typeof heros);

// +++++++++++++++++++++++++++

// Stack (Primitve), Heap (Non-primitive)

let myYoutubename = "shubhang"

let anothername = myYoutubename
anothername = "chai aur code"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shubhang@google.com"
console.log(userOne.email);
console.log(userTwo.email);