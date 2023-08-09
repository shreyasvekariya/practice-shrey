// const tinderUser = new Object ()  // singleton object
const tinderUser = {}  // non singleton object

tinderUser.id = "shrey123"
tinderUser.name = "shrey"
tinderUser.isLoggedin = false


// console.log(tinderUser);

const regularUser = {
    email : "shrey@gamil.com",
    fullname : {
        userfullname : {
            firstname: "shrey",
            lastname: "vekariya",
        }
     }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = Object.assign(obj1,obj2,obj4)
// console.log(obj3);
// console.log(obj1);

const obj3 = {...obj1, ...obj2,...obj4}
// console.log(obj3);


const users = [
    {
        id:1,
        email: " shrey@gamail.com"
    },
    {
        id:1,
        email: " shrey@gamail.com"  
    },
    {
        id:1,
        email: " shrey@gamail.com"  
    },
    {
        id:1,
        email: " shrey@gamail.com"   
    }

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'));


const course = {
    courseName: "shrey study",
    price : "999",
    courseInstroctor : "shreya",
    
}

// console.log(course.courseInstroctor)

const {courseInstroctor : instructor} = course

// console.log(courseInstroctor);
console.log(instructor);  // object destruvturing

// API***********value comes in jason

{
    "name" : "shreyas",
    "coursename" : "shrey study",
    "price" : "free"
}

[
    {},
    {},
    {},
]
