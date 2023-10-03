// let name = "Santhosh";
// console.log(name.length);
// let name2 = "Santhosh          ";
// console.log(name2.trim().length);
let myHeroes = ["thor","spiderman"];
let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getspidermanPower:function(){
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}
Object.prototype.Santhosh=function(){
    console.log("Santhosh is present in all objects");
}
Array.prototype.heySanthosh = function(){
    console.log("Santhosh says hello");
}
// heroPower.Santhosh()
myHeroes.Santhosh()
myHeroes.heySanthosh()
// heroPower.heySanthosh()
// inheritance
const user={
    name:"Santhosh",
    email:"santhosh@gmail.com"
}
const teacher = {
    makeVideo:true,
}
const teachingSupport = {
    isAvailable:false,
}
const TASupport = {
    makeAssignment:"JS Assignment",
    fullTime :true,
    // __proto__:teachingSupport,
}
// Teacher.__proto__=user;  
// outdated structure above
// modern apprach
Object.setPrototypeOf(teachingSupport,teacher)
let anotherUsername = "chai aur code    ";
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.truelength();
"Santhosh".truelength();
"icetea".truelength();