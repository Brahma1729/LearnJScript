let employee = {
    name : "Veera",
    age: 33,
    language : "JavaScript"
}

//let {name, age, language} = employee
//destructure command should have same names as the object and we can also provide aliase names

let {name:n,  age:a, language:l} = employee

console.log(n)
console.log(a)
console.log(l)


// The above command destructuring the object employee
// destructure command is similar to the import statemnt
/*
console.log(name)
console.log(age)
console.log(language)
*/

// if we didn't destructure the employee object then we have to aceess the object parameters with employee.name etc..

console.log(employee.language);