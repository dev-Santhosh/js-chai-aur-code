class user{
    constructor (username){
        this.username=username;
    }
    logMe(){
        console.log(`username:${this.username}`);
    }
    static createId(){
        return`123`;
    }
}
const santhosh = new user("Santhosh");
// santhosh.createId();
// console.log(santhosh.createId());
class teacher extends user{
    constructor(username,email){
        super(username);
        this.email =email;
    }
}
const redmi =new teacher("redmi","redmi@gmail.com");
console.log(redmi);
redmi.logMe();