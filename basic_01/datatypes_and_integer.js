// premitive 

// 7 premitive : string , Numbesr , Boolean , Undefined , Symbol, Bigint

const score = 180
const scoreValue = 100.3

const LoggedIn  = false
const outsiteTemp = null
let accountEmail;

const id  = Symbol('123')
const anotherId = Symbol('123')  // type in capital "S"

console.log(id === anotherId);

const bigNumber = 63532955518160720749n


//  reference (Non premitive)

// Array , Object , Function

const heros = ["shrey" , "shreya" , "shreyas"];
let myObj = {
    name: "shrey",
    age: 18,
}

const myFunction = function(){
    console.log("Hellow world");
}

console.log( typeof myFunction);



// ***********************************Memory

//  stak (premitive) , Heap (Non-premitive)

let myName = "shrey"

let anotherName = myName
anotherName = "shreyas"

console.log(anotherName);
console.log(myName);

let userOne = {
    email: "sh@gamil.com",
    upi: "user2ybl"
}

let userTwo = userOne

userTwo.email = "shreya@gamail.com"

console.log(userOne);
console.log(userTwo);


