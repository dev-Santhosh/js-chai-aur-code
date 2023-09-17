const score = 183
const score2 = new Number(200)
// Second line gives number only because of new keyword
console.log(score)
console.log(score2)
console.log(score2.toString())
console.log(score2.toString().length)
console.log(score2.toFixed(2))
const otherNumber = 23.2425955
console.log(otherNumber.toPrecision(3))
const otherNumber2 = 15423.2425955
console.log(otherNumber2.toPrecision(3))
const hundreds = 1000000
console.log(hundreds.toLocaleString());
// Below line gives in Indian standards
console.log(hundreds.toLocaleString("en-IN"));
                    /************Maths****************/
console.log(Math);
console.log(Math.abs(-23));
console.log(Math.round(-23.548));
console.log(Math.ceil(-23.548));
console.log(Math.floor(-23.948));
console.log(Math.min(54,8455,6,85,5488,8,1))
console.log(Math.max(54,8455,6,85,5488,8,1))
console.log(Math.random());
// The value of random function is always between the range of 0 to 1
console.log(Math.floor(Math.random()*100) + 1);
// +1 is done to avoid the 0 value in the random function
const max = 20
const min = 1
console.log(Math.floor(Math.random()*(max -min+ 1)+ min));
// console.log(Math.floor(Math.random()*(max -min + 1)));