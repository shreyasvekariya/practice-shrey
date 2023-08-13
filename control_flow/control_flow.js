//if


// const temperature = 50

// if (temperature === 41){
//     console.log("less than 50");
// } else {
//     console.log("temperature hoga kuch menu ki pata");
// }
// console.log("execute ");

// <, >, <=,>=,==,===,!=,!==  comparition


//  const score =  200

//  if (score>100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
//  }

//  console.log(`user power${power}`); "error"


const balance = 949

// if (balance >500) console.log("test") , console.log("test2"); 

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 750");
// }else if (balance < 950) {
//     console.log("less than 950");
// }else {
//     console.log("less than 10000");
// }



const userLoggedIn = true
const DebitCard = true
const logginfromgoogle = false
const logginfromemail = true

if (userLoggedIn && DebitCard ) {
 console.log("allow to buy a course");   
}

if (logginfromgoogle || logginfromemail) {
    console.log("ready for registration");
}

//  =================switch====================

//  switch (key) {
//     case value:
        
//         break;
 
//     default:
//         break;
//  }

const month = 10

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("between may to dec");
        break;
}


// ===================truly and falsy value=============

  const userEmail = {}

  if (userEmail) {
    console.log("got user Email");
  }else{
    console.log("Don`t have a user Email");
  }

//   falsy value :~   false, 0, -0, Bigint 0n, "", null, undefined ,NaN

//  truthly value :~ "0", 'false' , " " , [] , { }, function(){}
           
// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20


console.log(val1);


// ============ternery operator

// condition ? true : false

const icecreamprice = 100
icecreamprice <=80 ? console.log("less than 80") : console.log("grater than 80");