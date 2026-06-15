// array

const myArr = [0, 1, 2, 3, 4, 5] // array indexing start from zero and also array is resizable in javascript 
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array Methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // we will not give any parameter or argument in pop

// myArr.unshift(9)
// myArr.shift() // we will not give any parameter in shift

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //join adds all the element in a string

// console.log(myArr);
// console.log(newArr);


//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// slice doesnt include last value of range and splice inclues the last value of range for example (1, 3) slice = [1, 2]  splice =[1,2, 3]                              in simple words splice manipulates the original array to give its result whereas slice does not.