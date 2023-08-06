//  array 

const myArr = [0,1,2,3,4,5]
const myHeros = [ "shrey" , "shreyas"]

const myArr2 = new Array (1,2,3,4)
// console.log(myArr[1]);

// Array method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()

// console.log(myArr.includes(9)); //boolean type
// console.log(myArr.indexOf(3));  //number

const newArr = myArr.join()


            // const Arr = [1,2,3]
            // const Arr2 = (Arr.shift());

            // console.log(Arr);
            // console.log(Arr2);


// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // string

//  slice , splice

console.log("A", myArr); //1

const myn1 = myArr.slice(1,3)

console.log(myn1); //2
console.log("B" , myArr); //3

const myn2 = myArr.splice(1,3) 
console.log(myn2); //4
console.log("c" ,myArr); //5// chnage in origional array (it remove splice value)