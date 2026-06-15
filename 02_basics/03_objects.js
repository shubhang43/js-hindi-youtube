// singleton
// object create 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shubhang",
    "full name": "Shubhang Deep Singh",
    [mySym]: "mykey1", // we will use square bracket[] to refer symbol but if we want to refer it to string remove square bracket.
    age: 22,
    location: "Jaipur",
    email: "shubhang@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])

JsUser.email = "shubhang@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "shubhang@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());