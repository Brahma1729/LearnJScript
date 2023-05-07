function add(a,b,c) {
    let result = a+b+c
    return result
}
//Function with default value declaration
function add_dec(a=0,b=0,c=0) 
{
    let result = a+b+c
    return result   
}

console.log(add());
console.log(typeof add)
console.log(add(10,20))
console.log(add(10,20,30))

console.log(add_dec());
console.log(typeof add_dec)
console.log(add_dec(10,20))
console.log(add_dec(10,20,30))

let func1 = function Hello(str1) {
    return "Hello " + str1;
}
let name1 = "Veera"
console.log(func1(name1));