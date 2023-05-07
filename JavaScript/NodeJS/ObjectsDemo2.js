let person = {
    fname : "Veera",
    lname : "Malluri",
    location : "NC",
    func1 : function(num1){
        console.log("I'm inside the func1 " + num1);
    },
    /*
    func2 : num2 => {
        console.log("I'm inside the func2 " + num2);
    }*/
    func2 : (num2) => {
        console.log("I'm inside the func2 " + num2)
    }
}
//console.log(person);
person.location ="Mooresville"
//console.log(person);
person.phone = '980-367-1833'
//console.log(person);
delete person.phone  // we can delete the any object property by using delete keyword but we can't delete the person object itself by using delete keyword
//console.log(person);
person.func1(100)
person.func2(1000)

// For-in loop is used to iterate through object
// For-of loop can't be used to iterate through object but you can used to iterate through arrays and strings etc..

for (x in person)
{
    //console.log(x);
    console.log(person[x]) // during iteration we can't use the person.x notation to read values of the person object

}

