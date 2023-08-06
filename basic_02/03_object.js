// two method to declair object
// literals. and constructor //  singleton =! leterals

// object literals

const mySym = Symbol("key1")

const jsuser = {
    name: "shrey", //string
    "full name" : "shreyas vekariya", 
    [mySym] : "shreykey1",
    age:18,
    location: "rajkot",
    email: "shrey@gmail.com",
    isLoggedIn : false,
    lastLoggedinDays: [ "Monday" ,"saturday"]
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mySym]);
// console.log(typeof jsuser[mySym]);

jsuser.email = "shrey12@gmail.com"
// Object.freeze(jsuser)
jsuser.email = "shreya@gamil.com"

// console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello Js user");
}

jsuser.greetingTwo = function(){
    console.log(`hello Js user , ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

