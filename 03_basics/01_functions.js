function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("T");
    console.log("H");
    console.log("O");
    console.log("S");
    console.log("H");
}
sayMyName()
// sayMyName => reference ; sayMyName() => execution
// function addNumbers(num1,num2){
//     console.log(num1+num2);
// }
function addNumbers(num1,num2){
    return num1+num2;
}
const result = addNumbers(2,3)
// function addNumbers(num1,num2) => num1, num2 are parameters
// addNumbers(2,3) => 2,3 are arguments
console.log("Result:" ,result);
// If we use console.log() method for the above line then the output will be "Result: undefined" because the value of teh addition is not returned
// If we give any command after "return" statement in the function the command doesn't work
function loginUser(userName){
    if(!userName){
        console.log("Please enter the username!!!");
    }
    return `${userName} just logged in`
}
console.log(loginUser("Santhosh"));
// If no value/argument is passed then the output is "undefined just logged in"
function calculateCartPrice(...num3){
    return (num3)
}
console.log(calculateCartPrice(200,300,400));
// If there is only one parameter and multiple arguments then we need to use "..." in front of the parameter. This returns an array.
const user = {
    userName2 : "Santhosh",
    email2 : "santhosh@google.com"
}
function handleObject(anyObject){
    console.log(`The username is ${anyObject.userName2} and the price is ${anyObject.email2}`);
}
// handleObject(user)
handleObject({
    userName2 : "Santhosh",
    email2 : "santhosh@google.com"
})
const newArray = [100,200,300]
function returnSecondValue(myNewArray){
    return myNewArray[0]
}
// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([100,200,300]));