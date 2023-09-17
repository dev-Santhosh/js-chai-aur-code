// Dates
let myDate = new Date()
console.log(myDate)
console.log(typeof myDate);
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())
let myCreatedDate = new Date(2023,0,12)
// Months start from 0 in JS
console.log(myCreatedDate.toLocaleDateString());
let myCreatedDate2 = new Date("2023-12-09")
console.log(myCreatedDate2.toLocaleDateString());
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Math.floor(myTimeStamp/1000))
let myDate2 = new Date()
console.log(myDate2.getDate())
console.log(myDate2.getDay())
console.log(myDate2.getMonth() + 1)
console.log(myDate2.toLocaleString("deafult", {
    weekday : "long"
}));