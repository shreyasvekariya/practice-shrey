// for of

// ["", "",""]
// [{},{},{} ] 

const arr = [1,2,3,4,5,]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [ key, value] of map) {
    // console.log(key, ':~' ,value);
}



// const myObj = {
//     game1: 'freefire',
//     game2: 'pubg',

// }
// for (const [key,value] of myObj) {
//     console.log(key, ':~' ,value);
// }


const myObject = {
    js : 'java script',
    cpp : 'c++',
    rb : 'rubby',
    swift : 'swift by apple'
} 

for (const key in myObject) {
    // console.log(myObject[key]);  // value - javascipt
    // console.log(key);            //key - js 
    // console.log(`${key} sortcut is for ${myObject[key]}`);         
}


const programming  = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//    console.log(key); // 01234
//    console.log(programming[key]);
}



// map is not iteretor

// const map = new Map()
// map.set('IN', "India")
// map.set('US', "United States of America")
// map.set('FR', "France")

//  for (const key in map) {
//    console.log(map);
//  }


const codding = [ "js", "ruby", "java", "python" , "cpp"]

// codding.forEach( function (item){
//     console.log(item);
// }  )

// codding.forEach( (item) => {
//     console.log(item);
// }  )

// function printMe(item){
//     console.log(item);
// }
// codding.forEach(printMe)

codding.forEach( (item , index,arr) => {
        // console.log(item,  index,arr);
    }  )

    const myCodding = [
        {
            languageName: "javascript",
            languageFileName : "js"
        },
        {
            languageName: "c++",
            languageFileName : "cpp"
        },
        {
            languageName: "python",
            languageFileName : "py"
        }
    ]

    myCodding.forEach( (language) => {
            // console.log(language);
            console.log(language.languageName);
    }  )