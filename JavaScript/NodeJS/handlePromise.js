/*
new Promise ((resolve,reject) => {
    resolve("")
    reject("")
})

new Promise(function(resolve,reject)
{
    resolve("")
    reject("")
})

// both resolve and reject are call back functions. we can user defined names those names are not standard

*/

let f1 = function(){
    console.log(`I'm in F1`)
}

let f2 = function ()
{
    setTimeout(function(){
        console.log(`I'm in f2`)}
    ,5000)
}   

let f3 = function(){
    console.log(`I'm in F3`)
}

/*
f1()
f2()
f3()   
*/ 

// if you observe the ouptput function f3 won't wait untill the Function f2 completion
// This can be achieved by using promises async and await functions

let F1 = function(){
    return `I'm in F1`
}

let F2 = function ()
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve ("Im in function F2")
        },5000)
    })
}   

let F3 = function(){
    return `I'm in F3`
}

/*function callAllFunctions(){
    console.log(F1())

    console.log(F2())

    console.log(F3())
}

// funtion f2 returns promise pending state and won't print anything this has to be handled by async and await.
*/
let callAllFunctions = async function(){
    console.log(F1())

    console.log(await F2())

    console.log(F3())
}

callAllFunctions()

// Now function F3 will run after F2 wait period and F2 completion.