console.log("The concept of string is Javascript")
const name="vinay"
const college="LDCE"
console.log(name + college+"At ahemdabad")
console.log(`Hello my name is ${name} and my college is ${college}`)

const gameName=new String('vinay vaja')

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8))
console.log(gameName.indexOf('j'))

const newString=gameName.substring(0,5)  // 5 is excluded
console.log(newString)


