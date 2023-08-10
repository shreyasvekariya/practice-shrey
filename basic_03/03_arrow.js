const user = {
    username: "shreyas",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);  //this=current context
        // console.log(this);
    }
}


// user.welcomeMessage()
// user.username ="shreya"  // change context (value)
// user.welcomeMessage()

// console.log(this);  // {}-empty  // but in browser - "window" is global object


// function shrey(){
//     let username ="shreya"
//     console.log(this.username);
// }
// shrey()



// const shreyas = function() {
//     let username ="shreyas" 
//     console.log(this.username);
// }


// const shreyas = ()=> {
//     let username ="shreyas"
//     console.log(this);
// }

// shreyas()



// const addtwo = (num1 ,num2) => {
//     return num1 + num2
// }

// const addtwo = (num1 ,num2) => num1 + num2  
// const addtwo = (num1 ,num2) => ( num1 + num2)
const addtwo = (num1 ,num2) => ( {username: "Shreyas"})

console.log(addtwo(3,4))