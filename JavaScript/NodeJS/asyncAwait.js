let square = async function(num){
    return num*num
}
//console.log(square(2)) // return the promise 

// basically Async function resolve the promises and await returns the actual value

console.log(await square(3)) // return the value 9

// async and await internally handles the promises.