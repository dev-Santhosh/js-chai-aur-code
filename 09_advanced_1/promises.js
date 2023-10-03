const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(()=>{
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(()=>{
    console.log("Promise consumed");
})

new Promise((resolve, reject)=>{
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(()=>{
    console.log("Async 2 resolved");
})
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Chai",email:"chai@example.com"});
    },1000)
})
promiseThree.then((user)=>{
    console.log(user);
})
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({Username:"Santhosh",Password:"123456789"})
        }
        else{
            reject("Error! somethig went wrong");
        }
    }, 1000);
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.Username;
})
.then((Username)=>{
    console.log(Username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The promise is either resolved or rejected");
})
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"javascript",Password:"456123789"});
        }
        else{
            reject("Error:JS went rogue");
        }
    },1000);
})
async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
    try {
            const response = await promiseFive
            console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}
getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

