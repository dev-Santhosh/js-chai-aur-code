// Singleton
// Object.create()
// Object Literals
const mySym = Symbol("key1")
// Creating the symbol
const jsUser ={
    name:"Santhosh",
    "fullName": "Santhosh Pinisetti",
    age: 21,
    location: "Vizag",
    email: "santhosh@google.com",
    isLoggedIn: false,
    lastLoggedIn :["Sunday", "Saturday"],
    [mySym] : "myKey1",
    // Syntax to declare symbol as an element of object
}
// Below line is not the proper way to access objects elements
console.log(jsUser.email);
console.log(jsUser["email"]);
// Below line gives error so it is better to use the above line syntax for accessing the elements of the object
// console.log(jsUser."fullName");
console.log(jsUser["fullName"]);
console.log( jsUser[mySym]);
// changing the elements of the object
jsUser.location = "Kakinada"
console.log(jsUser.location);
// If we want to stop any of the changes happening to the code we can do it by using "Freeze" method
console.log(jsUser);
jsUser.greeting = function(){
    console.log(
        "Hello JS user"
    );
}
console.log(jsUser.greeting());
jsUser.greeting2 = function(){
    console.log(
        `Hello JS user, ${this.name}`
    );
}
console.log(jsUser.greeting2());
Object.freeze(jsUser)
// After this line if we do any changes in the code they does'nt appear
jsUser.location = "Vizag"
console.log(jsUser.location);