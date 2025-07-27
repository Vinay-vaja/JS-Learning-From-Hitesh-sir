console.log("All datatype summary in one video")
/* Js is dynamitacally type languages
mainly 2 types 
premitive and non premitive(refrences)

premitive:string , boolean ,null , undefined, symbol , BigInt,number

*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


//Reference: array,objects and functions


const heroes=["shakiman","ninjahathodi","chotabheem"]
console.table(heroes)

let myobj={
    "name":"vinay vaja",
    "salary":"90LPA",
    "Post":"SDE office 2"
}
console.log(myobj)

const myFN=function(){
    console.log("Here Krishna to all of you!")
}