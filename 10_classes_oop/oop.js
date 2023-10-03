// Object Literal
const user = {
    username:"Santhosh",
    loginCount:8,
    signedIn:"true",
    // **In an arrow function, this does not have its own value, it captures the value of this from its surrounding context. In this case, the surrounding context is the global scope (or wherever the arrow function is defined), and it does not have a username property.
    // getUserDetails:()=>{
    //     // console.log("Got user details from database");
    //     console.log(`Username: ${user.username}`);
    // }
    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);
// Constructor Function: new
// const promiseOne = new Promise((resolve,reject)=>{})
// const date =new Date()
function user2(userName,loginCount,isLoggedIn){
    this.userName = userName;
    this.loginCount =loginCount;
    this.isLoggedIn = isLoggedIn;
    // return this;
    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }
}
const userOne = new user2("Santhosh",8,true);
console.log(userOne.constructor);
const userTwo = new user2("JavaScript",12,false);
console.log(userTwo);
/*The results are overwritten by the new values. To avoid this we use "new"
keyword is used. */