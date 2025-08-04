console.log("The concept of date and time in javascript")
let myDate=new Date();
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())  //from my point of view this is best 
console.log(typeof myDate)//it's object type 

let myCreatedDate=new Date(2025,0,11)
console.log(myCreatedDate.toDateString())//supper

let myCreatedDate1=new Date("2025-01-14")
console.log(myCreatedDate1.toLocaleString())


let mytimeStand=Date.now()
console.log(mytimeStand);
console.log(DataTransfer.now())

console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekend:"long",

});

