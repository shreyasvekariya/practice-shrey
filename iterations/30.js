const codding = [ "js", "ruby", "java", "python" , "cpp"]


// const type = codding.forEach( (item) => {
//         console.log(item);
//         return item
// }  )

// console.log(type);

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.filter(  (num) => num>5)
// const newNum = myNums.filter((num) => {
    // return num>4
// })



// const newNum = []

// myNum.forEach( (num) => {
//         if (num>4) {
//             newNum.push(num)
//         }
// }  )

// console.log(newNum);



const myNums = [1,2,3,4,5,6,7,8,9,10 ]

// const mynum = newnum.map((num) => num=10)
// const mynum = newnum.map((num) => {return num=10})


const myvalue = myNums
            .map ( (num) => num * 10  )
            .map ( (num) => num + 1  )
            .filter( (num) => num>2 )


// console.log(myvalue);


const mynewNum = [1,2,3]

// const myTotal = mynewNum.reduce (function(acc,currval) {
//     console.log(`acc: ${acc} and currval${currval}`);
//     return acc+currval
// } ,0)

const myTotal = mynewNum.reduce( (acc,curr) => acc+curr ,0  ) 

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "game course",
        price: 3999
    },
]

const pricetoPay = shoppingCart.reduce( (acc, item)=> acc + item.price ,0 )

console.log(pricetoPay);