// hoisting feature

a =5
console.log(a) //ReferenceError: a is not defined

var a // declaring a variable after calling will work only with var keyword

//let a and const a won't work in such case

show()

function show()
{
    console.log(`I'm in show function`)
}

// In this above case also we can call the function before declaring

console.log(f1)  //Cannot access 'f1' before initialization

let f1 = function()
{
    console.log(`Im in th function f1`)
}

