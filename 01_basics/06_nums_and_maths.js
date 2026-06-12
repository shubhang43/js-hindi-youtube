const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(balance.toFixed(1));


const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++ Maths ++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); 
// abs is used to make negative value into positive it has no effect on values which are already positive.

// console.log(Math.round(4.3)); // round of number
// console.log(Math.ceil(4.3)); // it will always choose top value
// console.log(Math.floor(4.9)); // it will always choose low value
// console.log(Math.min(4, 3, 6, 8)); //it will always choose low value
// console.log(Math.max(4, 3, 6, 8)); //it will always choose low value

console.log(Math.random()); // Math.random always gives number between 0 and 1.
console.log((Math.random()*10) + 1); 

console.log(Math.floor(Math.random()*10) + 1); 
// floor gives lowest number and Math.random gives number betwwen 0 and 1 so floor will always give 0 to avoid this we have added 1 so the values will always be above or equal 1.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// in some cases we have define min as well as max we have used Math.randomvrather than multiplying it with 10 we have used (max - min) to get the range and + 1 is used to avoid 0 case  and at last + min is used so that we want min this value like in this case min vakue is 10 so we will get values equal or above 10.
