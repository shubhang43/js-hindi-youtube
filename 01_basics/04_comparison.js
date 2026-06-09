// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 !=1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// the reason for giving false,false,true is that an equality check == and comparisons > < >= <= works differently.
// comparisons convert null to Number, treating it as 0.
// thats why (3) null >= 0 is true and (1) null > 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// avoid these types of comparisons 

// === (strict check)

console.log("2" === 2);