class student{

    // Java Script doesn't support construct overloading and method overloading concepts.
    // In Java Script class can have only one constructor
    constructor(name,tech,location){
        this.name = name
        this.tech = tech
        this.location = location
    }

   get StdDetails()
    {
        return `The Employee name is ${this.name} works on ${this.tech} tech and located at ${this.location}`
    }
}

class HR extends student
{
    constructor(name,tech,location, noofLeaves){
        super(name,tech, location)
        this.noofLeaves = noofLeaves
    }

    approveleave(){
        console.log("Leave is approved and having "+(this.noofLeaves-1))
    }
}

let hr1 = new HR("Veera","Cypress","NC",10)

console.log(hr1.StdDetails)

hr1.approveleave()
