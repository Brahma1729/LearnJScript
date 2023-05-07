let browser = "chrome"
// If - Else condition
/*
if (condition) {
    
} else {
    
}
*/
if (browser.includes('chrome')){
    console.log("Chrome Started")
}
else if (browser.includes('firefox'))
{
    console.log("Firefox Started")
}
else {
    console.log("sorry");
}

/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

switch ("chrome") {
    case "chrome":
        console.log("Chrome Started")
        break;

    case "firefox":
        console.log("Firefox Started")
        break;
    default:
        console.log("Sorry")
        break;
}
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];  
}
*/
/*
array.forEach(element => {
});
*/

/* 
 --- For In loop syntax
 
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/
/*For Off Loop syntax   

for (const iterator of object) {
    
}
*/

/*
while (condition) {
    
}
*/
/*
do 
{
    
} 
while (condition);
*/