// a prtototyepe is an built in object
// A prototype is base class for all the objects
//  we can add variables and methods to the existing object
// it helps us to achive the inheritance

function Employee() {
  const privateData = "private";
  (this.name = "Chand"), (this.role = "full stack dev");
  this.log = function () {
    console.log(privateData);
  };
}

const employeone = new Employee();
Employee.prototype.salary = "44,000";
console.log(employeone.salary);
Employee.prototype.greet = function () {
  console.log(`hi this is ${this.name} ${this.privateData}`);
};
employeone.greet();
employeone.log();

// types of object creation
// calling by Object Contructor 

let obj = Object.create(new Object())
let obj2 = new Object()
console.log(obj)
console.log(obj2)

// interview questions
// in javascript eacch object contains an internal hiddedn property called prototype
// which corresponds to the prototype that object which may be null or point to other object or constructor
// we can get ptotypes using 

console.log(Object.getPrototypeOf(obj2) === Object.prototype)

// difference between proto and [[prototype]]
// prototype is special hidden propertyp in js objects
// but it cannot be access directly  it can acces torhough _proto_
// proto is a hidden property of each instance 
// prototype property exists in all constructor functions

const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
    toString(){
        console.log("hi")
    }
  };
console.log(myObject.toString())