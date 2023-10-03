function setUserName(username){
    // complex DB calls
    this.username=username;
    console.log("called");
}
function createUsers(username,email,password){
    setUserName.call(this,username);
    this.email=email;
    this.password=password;
}
const chai = new createUsers("chai","chai@fb.com",123)
console.log(chai);