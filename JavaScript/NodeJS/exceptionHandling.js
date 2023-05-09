/* Java having conceppt of error and exception
but in Java Script every thing is a error */

let fname = 10
try {
    console.log(fname.toUpperCase())    
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}

finally{
    console.log("Bye");
}

try{
    let num = 1

    let result = veera+1
    
    console.log(result);
    
}
catch(err){
    console.log(`Please check ${err.name} and ${err.message}`);
}
