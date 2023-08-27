// let var const

let num = 100 
console.log(num)

// let will allow you to change the value and 
// const will work as a constant will not allow to change after assignment


// " ; " is optional at the end of the statement

let str = "This is a string way of declaration"

console.log(str[10]) // we can access the each character in string by using index 
console.log(str[str.length-1])  // length function is not defined but string has the menthod length to find the length of the string

let bool = true  // declaration of boolean variable
console.log(str) 
console.log(bool)

console.log(typeof(num) + "\n" + typeof(str) +"\n"+ typeof(bool))


// Objects
// In Java Script dictionaries(key, valur pairs) treating as a objects

let empdet = {fname : "Veera" , lname : "Malluri" , midname : 'B'}

console.log(typeof(empdet));


// In JS we can reassign the different type of value to the variable
// let keyword provides this feature
// below example x1 intially number type later it changes to different types

let x1 = 10
console.log(typeof(x1));
x1 = 'Nandhu'
console.log(typeof(x1));
x1 = true
console.log(typeof(x1));
x1 = {}
console.log(typeof(x1));


// In Java Script Arrays also an Objects