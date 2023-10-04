class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new teacher("chai","chai@teacher.com","123");
chai.addCourse();
chai.logMe();
const tea = new user("tea");
// tea.addCourse();
tea.logMe();
console.log(chai===tea);
console.log(chai === teacher);
console.log(chai instanceof teacher);
console.log(chai instanceof user);