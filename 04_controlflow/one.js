// if
// const isUserLoggedIn = true
const temperature = 23
if(temperature === 41){
    console.log("The temperature is greater than 23");
}
else{
    console.log("The temperature is lesser than 23");
}
// <, >, <=, >= ,== , !=, ===, !==
const score = 200
if (score > 100){
    const power = "fly"
    console.log(`Score is ${score }`);
    console.log(`Power is ${power}`);
}
// Shorthand notation
const balance1 = 1000
if (balance1 > 500) console.log("The balance is more than 500"),
                   console.log("Sufficient balance");
// This is wrong way to write.
const balance2 = 1000
if (balance2 < 500){
    console.log("The balance is less than 500 ");
}
else if(balance2 < 750){
    console.log("The balance is less than 750 ");
}
else{
    console.log("Sufficient balance");
}
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard){
    console.log("Allow the user to buy the course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}