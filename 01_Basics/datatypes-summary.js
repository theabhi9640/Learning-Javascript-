// primitive

// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt ( big values that are not cover in number then use BigInt)

const score = 100 // number 
const scoreValue = 100.3 // number doesn't matter decimal or not

const isLoggedIn = false //  boolean datatype
const outSideTemp = null // null datatype
let userEmail; // undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
// false 

const bigNumber = 3456674656438373763n  // bigInt



// in js we can't define language never



// reference type ( non primitive )

// Array , Objects, Functions

const heros = ["haktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}    // array 

const myfunction = function(){
    console.log("Hello world");
}  // bigInt

console.log(typeof anotherId);


// *****************************Memory********************
// memories are two types - Stack(Primitive) , Heap Memory(Non-Primitive)

let myYouTubename = "hiteshchaudharydotcom"
let anothername = myYouTubename
anothername = "chaiaurcode"

console.log(myYouTubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@gyb"
}