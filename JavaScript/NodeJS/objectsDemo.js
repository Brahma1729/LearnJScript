let person  = {
    fname : "Veera",
    lname : "Malluri",
    dob : "06Jun1989",

    address : {
        street : "Claire ln",
        city : "Mooresville",
        state : "NC",
        pin : "28117"
    }
}
//console.log(person);
console.log(typeof(person));

console.log(person.fname) // or console.log(person["fname"]) --- both notations work

// This object declaration looks like a JSON structure 
// JSON means Java Script Object Notation. Basically JSON concept derived from this Object declaration.

console.log(person.address.street)
