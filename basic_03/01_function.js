function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("e");
    console.log("y");
    console.log("a");
}

// sayMyName() //for execute

function addTwoNumbers (number1, number2){   //peramiters

    // console.log(number1+number2);

// function addTwoNumbers (number1, number2){   //peramiters
    
    let result = number1 + number2   // addTwoNumbers(4,3)
    return result  // result ke baad kuch bhi print nahi hota
    return  number1 + number2

}


// const result = addTwoNumbers(4,3)    //arguments 
// console.log("result:",result);


function loginuserMessage(username = "person"){
if (!username) {
    // console.log("please enter a user name");
   return
}                                          //(!username) = (username === undefined)                       

    return `${username}just legged in`
}

// console.log(loginuserMessage("shreyas"))
// console.log(loginuserMessage(""))  // undefined

function calculateCardPrice (val1,val2,...num1){
    return num1 
}

console.log(calculateCardPrice (200 ,300,500))

const user = {
    username : "shreyas",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)
handleobject({
    username : "shreya",
    price : "199"
})

const myNewArray = [200,300,400]

function returnSecondValue (getArray){
    return getArray[0]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400]));