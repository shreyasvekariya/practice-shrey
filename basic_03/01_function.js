function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("e");
    console.log("y");
    console.log("a");
}

// sayMyName() for execute

// function addTwoNumbers (number1, number2){   //peramiters

//     console.log(number1+number2);

function addTwoNumbers (number1, number2){   //peramiters
    
    // let result = number1 + number2   // addTwoNumbers(4,3)
    // return result  // result ke baad kuch bhi print nahi hota
    return  number1 + number2

}


// const result = addTwoNumbers(4,3)    //arguments 
// console.log("result:",result);


function loginuserMessage(username = "person"){
if (!username)//(username === undefined)  {
    console.log("please enter a user name");
   return
}

    return `${username}just legged in`
}

// console.log(loginuserMessage("shreyas"))
console.log(loginuserMessage(""))  // undefined