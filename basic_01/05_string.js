const name= "shrey"
const repoCount = 20

// console.log(name + repoCount + " value"); 

console.log(`hello my name is ${name} and my repo Count is ${repoCount} `);

const gameName = new String('shrey-xx-26')
console.log(typeof gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
const anotherString = gameName.slice(-8,3)

console.log(newString);
console.log(anotherString);

const newStringOne = "    shrey   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shrey.com/shrey%20vekariya"

console.log(url.replace('%20', '-'));

console.log(url.includes('shreya'))

console.log(gameName.split('-'));