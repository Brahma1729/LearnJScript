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
        return `The Employee name is ${this.name} works on ${this.tech} tech and located at ${this.location} and his email is ${this.email}`;
    }

  
    set StdEmail(email)
    {
        this.email = email
        
    }
}

export{student}

// Instead of exporting class we can export calss objects also by passing class object name instead of class name