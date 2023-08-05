// Date 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

//  let myCreatedDate  = new Date (2323, 0 , 26)
//  let myCreatedDate  = new Date (2323, 0 , 26 , 2 , 60) 
//  let myCreatedDate  = new Date ("2005-05-26") // YYYY/MM/DD
 let myCreatedDate  = new Date ("06-26-2005") //MM/DD/YYYY
//  console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date ()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`  // sttring interpolation

newDate.toLocaleString('default' , {

    weekday:"short"
})
console.log(newDate);
