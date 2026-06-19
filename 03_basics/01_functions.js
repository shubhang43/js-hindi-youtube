function sayMyName(){
console.log("S");
console.log("H");
console.log("U");
console.log("B");
console.log("H");
console.log("A");
console.log("N");
console.log("G");
}

// sayMyName()


// function addTwoNumbers(number1, number2) //when we make the definiton of function at that time the value or input which we pass is called as parameter.
// {

//     console.log(number1 + number2);    
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result 
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // when we call any function and at that time the value which we pass is  called as argument.


// console.log("Result: " , result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return//exclamatory mark(!) works like it convertstrue into false and false into true if(username === undefined) or if(!username) both are same or works as same.

    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("shubhang"));
// console.log(loginUserMessage(""));

function calculateCartPrice(val1, val2, ...num1){
    return num1

}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "shubhang",
    prices: 199
}

function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function  returnSecondValue(getArray){

    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
