class student{

    // Java Script doesn't support construct overloading and method overloading concepts.
    // In Java Script class can have only one constructor
    constructor(name,tech,location){
        this.name = name
        this.tech = tech
        this.location = location
    }

   get Empdetails()
    {
        return `The Employee name is ${this.name} works on ${this.tech} tech and located at ${this.location} and his email is ${this.email}`;
    }

  
    set empEmail(email)
    {
        this.email = email
        
    }
}

let std1 = new student('Veera','Automation','NC')
std1.empEmail = 'vmalluri@in.ibm.com'
console.log(std1.Empdetails);



let std2 = new student('Kala','Home Dept','NC')
std2.empEmail = 'veeramalluri@in.ibm.com'
console.log(std2.Empdetails);

