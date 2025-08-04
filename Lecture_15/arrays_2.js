console.log("In depth about in js array ")
const marvel_hereos=["thor ","Ironman","Spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_hereos.push(dc_heroes)  // [.....,[] ] //give this type array inside another array 
// console.log(marvel_hereos)

const allHeroes=marvel_hereos.concat(dc_heroes)
console.log(allHeroes)

const all_newheroes=[...marvel_hereos,...dc_heroes]
console.log(all_newheroes) //by spreading

const another_array=  [1,2,3,[4,5,6],7,[6,7,[8,9,0]]]
const real_ansarrray=another_array.flat(Infinity)
console.log(real_ansarrray )

console.log(Array.isArray("Vinay"))
console.log(Array.from("Vinay"))  
console.log(Array.from({name:"Vinay"}))  //intresting it gives empty

let score1=100
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)) //diffrent diffrent element ne array banava mate