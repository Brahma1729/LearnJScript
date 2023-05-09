let s1 = new Set()
s1.add(10)
s1.add(10)
s1.add("JavaScript")
s1.add(true)

console.log(s1)

// Set doesn't allow duplicate values

// How can you delete duplicate elements in array
// By converting array into set and convert again back to array

s1.delete(10)

console.log(s1);

console.log(s1.has("JavaScript"))


// MAP

let m1 = new Map()

m1.set("name","Veera")
m1.set("address", {
    "location":"NC",
    "Pin":28117
})
console.log(m1);
console.log(m1.get("name"))

for (let [x,y] of m1)
{
    console.log(x) // x is key
    console.log(y) // y is value
}

m1.forEach(function (x,y) {
    console.log(x); // X is value here
    console.log(y); // y is key here
    
})

/*
we have concept of WeakSet and WeakMap

both WeakSet and WeakMap we can store only Objects. it won't accept any other data types.

Declaration:
let ws1 = new WeakSet();

let wm1 = new WeakMap();
*/

