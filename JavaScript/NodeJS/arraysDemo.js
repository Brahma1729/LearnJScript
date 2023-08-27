let arr = [20,30,60,100]
console.log(arr)
console.log(arr[1])
console.log(arr[20])
console.log(arr.length)

arr.forEach(x => {
    console.log(x)
})

/*
here show is a named function called inside the forEach function considered as a call back function
arr.forEach(show)

function show(value)
{
    console.log(value)
}
*/

/*
function(x) anonymous function consider as a call back function
arr.forEach(function(x) {
    console.log(x)
})
*/

arr.push(80) // To add new element into array
console.log(arr);
arr.unshift(9) // To add new element at begining of array
console.log(arr);
arr.pop() // To remove last element of array
console.log(arr);
arr.shift() // To remove first element of the array
console.log(arr);
// arr.splice(1,2) // To remove the element at specified start and end index
// console.log(arr);
arr.splice(1,2,['Veera','Malluri'], 'Kalyani') //To remove the element at specified start and end index and add the new elements
console.log(arr);

