class student{

    // Java Script doesn't support construct overloading and method overloading concepts.
    // In Java Script class can have only one constructor
    constructor(name,tech,location){
        this.name = name
        this.tech = tech
        this.location = location
    }

    getEmpdetails()
    {
        console.log(`The Employee name is ${this.name} works on ${this.tech} tech and located at ${this.location}`);
    }

    setempEmail(email)
    {
        this.email = email
        console.log("employee email is " +email)
    }
}

let std1 = new student('Veera','Automation','NC')
std1.getEmpdetails()
std1.setempEmail("vmalluri@in.ibm.com")


let std2 = new student('Kala','Home Dept','NC')
std2.getEmpdetails()

