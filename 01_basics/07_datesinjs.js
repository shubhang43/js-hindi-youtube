// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 5, 15) //months start from zero in javascript
// let myCreatedDate = new Date(2026, 5, 15, 5, 3)
// let myCreatedDate = new Date("2026-01-14")
let myCreatedDate = new Date("01-15-2026")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay() and the time}`

newDate.toLocaleString('default', {
    weekday: "long",
   
})