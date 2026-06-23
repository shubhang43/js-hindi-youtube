const user = {
    username: "shubhang",
    price: 999,
    

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);//this keyword is used to refer to current context

        console.log(this);

    }

}

// user.welcomeMessage() 
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "shubhang"
//     console.log(this.username);
// }
// chai()


// const chai = function () {
//   let username = "shubhang"
//   console.log(this.username);
    
// }

const chai =  () => {
  let username = "shubhang"
  console.log(this);
    
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // implicit return in this we dont have to use return keyword whereas in explicit return we have to use return keyword. 
// if you use curly brackets{} then we have to use return keyword but if you use paranthese() then no need to use return keyword

const addTwo = (num1, num2) => ({username: "shubhang"})


console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()