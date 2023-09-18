// this keyword is used for current context access
const user = {
    userName :"Santhosh",
    email:"santhosh@gmail.com",
    welcomeMessage: function(){
        console.log(`Hello ${this.userName} welcome to the site`);
        console.log(this);
    }
}
user.welcomeMessage()
user.userName = "Pinisetti"
user.welcomeMessage()
console.log(this);
function chai(){
    let userName2 = "Santhosh"
    console.log(this.userName2);
    console.log(this);
}
chai()
// this can be used in both objects and functions, but its behavior can vary depending on how and where it is used.
const chai2=()=>{
    let userName2 = "Santhosh"
    console.log(this.userName2);
    console.log(this);
}
chai2()
// Explicit Return
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(2,3));
// Implicit Return
const addThree = (num1, num2) =>  (num1 + num2)
// const addThree = (num1, num2) => num1 + num2
console.log(addTwo(2,3));

const user2 = () => ({userName3: "Santhosh"})
console.log(user2().userName3);
// To access the objects they need to be wrapped in parantheses
const myArray = [1,2,3,4,5,6,7,8,9]
myArray.forEach()
