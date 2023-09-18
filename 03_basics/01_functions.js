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