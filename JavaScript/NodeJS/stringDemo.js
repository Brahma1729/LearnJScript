let str = "This is the java Script demo book $ 25 USD"

// String Functions

console.log(str.charAt(0));
console.log(str.length)
console.log(str.startsWith("Th"));
// includes method is like partial text validation and it's case sensitive
console.log(str.includes("java"));
console.log(str.includes("usd"))

console.log(str.toLowerCase())
//console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());
//console.log(str.toLocaleUpperCase())


// split, replace, trim are other methods mostly used
console.log(str.split(" "))
console.log(str.split(" ").length)