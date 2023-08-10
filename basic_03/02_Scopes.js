// (1 = block) ; (2=global scope) 
// global scope ni value block ma aave
// but block ni value global ma n aave

// var c = 300
let a = 300


if (true) {
    let a = 110
    const b = 20
    var  c = 30
    // console.log("INNER: ",a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "shreyas"

    function two (){
        const website = "youtube"
        console.log(username);  // global ni value block ma assign thay
    }
    // console.log(website);    //block ni value global ma assign n thay
    // console.log(username);   //global ni value global ma assign thay

    two()

}

one()

if (true) {
    const username = "shreya"
    if (username === "shreya") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ******************* intresting ********************

// addone(5)  // pehla ane pachi banne jagya ae execute thay
function addone(num){
    return num + 1
}
console.log(addone(5))


const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5))  // pachi j execute thay
