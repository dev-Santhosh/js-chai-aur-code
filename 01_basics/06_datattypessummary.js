// Primitive datatypes
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
const score = 100
const scoreValue =100.3

const isLoggedIn =false
const outsideTemp = null
let userEmail = undefined

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId)

const bigNumber = 3446489789678995n
console.log(typeof bigNumber);
// Reference (Non Primitive)
// Array, Objects, Functions
const heroes =["Shaktiman", "Naagraj", "Doga"];
console.log(typeof heroes)
let myObj ={
    name:"Santhosh",
    age:21,
}
console.log(typeof myObj)

const myFunction = function(){
    console.log("This is my first function")
}
console.log(typeof myFunction);

// Memory
// Stack(Primitive), Heap(Non-Primitive)
let firstName = "Santhosh"
let secondName = firstName
secondName ="Pinisetti"
console.log(firstName);
console.log(secondName);


let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "user@google.com"
console.log(userOne);
console.log(userTwo);