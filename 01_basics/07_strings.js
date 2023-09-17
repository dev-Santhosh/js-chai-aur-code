const name ="Santhosh"
const repoCount = 2
// console.log(name + " " + repoCount + " Just begun");
// String Interpolation
console.log(`My name is ${name}` + ` and my repocount is ${repoCount}`);
const gameName = new String("Santhosh-Pinisetti")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));
const newString = gameName.substring(0,8);
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const newString2 = "     Santhosh    "
console.log(newString2)
console.log(newString2.trim());
const url = "https://santhosh5.com"
console.log((url.replace('5','19')))
console.log(url.includes("Santhosh"));
console.log(gameName.split("-"));