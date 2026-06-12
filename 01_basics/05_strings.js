const name = "shubhang"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shubhang-sh-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4) // methods types
console.log(newString);

const anotherString = gameName.slice(-10, 4);
console.log(anotherString);

const newStringOne = "  shubhang  "
console.log(newStringOne);
console.log(newStringOne.trim());

// trim works on white space characters plus line terminators. 

const url = "https://shubhang.com/shubhang%20singh"
console.log (url.replace('%20', '-')); //replace method

console.log(url.includes('shubhang'))
console.log(url.includes('mayank'))

console.log(gameName.split('-'));