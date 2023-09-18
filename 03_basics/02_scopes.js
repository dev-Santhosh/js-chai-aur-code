// let a = 300
// if (true){
//     let a=10
//     const b=20
//     var c=30
//     console.log("Inner:" , a);
// }
// console.log(a);
// // console.log(b);
// console.log(c);

function one()  {
    const userName= "Santhosh"
    function two(){
        email:"santhosh@google.com"
        console.log(userName);
    }
    // console.log(email);
    two()
}
one()

if(true){
    const userName2 = "Santhosh"
    if(userName2 === "Santhosh"){
        const website = " youtube"
        console.log(userName2 + website);
    }
    // console.log(website);
}
// console.log(userName2);
function addOne(num){
    return num+1
}
addOne(5)
// In the above case even if we write the addOne(5) before the function addOne(), the function gest executed and the result is obtained
const addTwo = function(num){
    return num+2
}
addTwo(5)
// But when we write the addTwo(5) before the addTwo(), then it throws an error that it cannot access addtTwo before initialisation.