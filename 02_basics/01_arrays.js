// Arrays
const array = [0,1,2,3,4,5,6,7,8,9]
console.log(array);
// When arrays are copied they make a shallow copy i.e, they share the same reference point
const array2 =new Array(1,2,3,4,5,6,7,8,9)
console.log(array2);
console.log(array2[2]);
array.push(10)
console.log(array);
array.pop(10)
console.log(array);
array.unshift(3)
console.log(array);
array.shift(3)
console.log(array);
console.log(array.includes(230));
console.log(array.indexOf(5));
const newArry = array.join()
console.log(newArry);
console.log(typeof newArry);
// Slice and Splice
console.log("A" , array);
const newArry2 = array.slice(1,6)
console.log(newArry2)
console.log("B", array);
const newArry3 = array.splice(1,6)
console.log(newArry2)
console.log("C", array);