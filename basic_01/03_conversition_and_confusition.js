score = 3
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number (score)
console.log(typeof valueInNumber );
console.log( valueInNumber );

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoogedIn = 1

let booleanIsLoogedIn = Boolean(isLoogedIn)
console.log(booleanIsLoogedIn);

// 1 => true; 0 => false
// "" => false
// "shrey" => true

let someNumber = 33

let stringNumber = String (someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// *********opration********//

let value = 33
let negvalue = -value
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

let str1 = "hellow"
let str2 = " shrey"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 4 % 3 );

console.log(+true);
console.log(+"");

let num1 , num2 , num3 

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);