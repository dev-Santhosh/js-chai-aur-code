const tinderUser = new Object()
// const tinderUser = {}
// The above line also gives the same output. Difference between the two is the first line is "Singleton object" and the second line is "Non Singleton object".
console.log(tinderUser);
tinderUser.id = "12346agkfca"
tinderUser.name = "Santhosh"
tinderUser.isLoggedIn = false
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// The data type of the above lines output is array
// If we wanted to find whether a certain value exists or not in the object then use "hasOwnProperty("")" function
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
const regualrUser = {
    email: "santhosh@gmail.com",
    fullName :{
        userFullName:{
            firstName: "Santhosh",
            lastName: "Pinisetti"
        }
    }
}
console.log(regualrUser.fullName);
console.log(regualrUser.fullName.userFullName);
console.log(regualrUser.fullName.userFullName.firstName);
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1, obj2)
// A better way to do is as follows
const obj3 = Object.assign({}, obj1, obj2)
// Another method is to use the spread operator
// const obj3 = {...obj1, ...obj2}
console.log(obj3)
const array = [
    {
        id1: "123szf",
        email2:"user1@gmail.com"
    },
    {
        id2: "865ffsdf",
        email2:"user2@gmail.com"
    },
    {
        id3: "5344scsdc",
        email3:"user3@gmail.com"
    },
    {
        id4: "13465dsasv",
        email4:"user4@gmail.com"
    },
]
console.log(array[1].email2);

