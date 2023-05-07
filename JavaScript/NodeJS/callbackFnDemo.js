// Call back function is a way of calling function in another function

function logfun (value)
{
    console.log("The result is " + value);
}

function sum(a,b,c,otherfunc) 
{
    let result = a+b+c
    otherfunc(result)
}

sum(10,20,40,logfun) // while passing function as a parameter no need to mention braces "()"