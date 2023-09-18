const userEmail = "santhosh@gmail.com"
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Please provide email");
}
// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy Values
// 1, "0", "false"/'false', " ", [], {}, function(){}, 
if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// Nullish Coalesing Operator(??): null undefined
let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = undefined ?? 15 ?? 23
console.log(val1);
// Terinary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ?console.log("Greater than 80") : console.log("Lesser than 80");