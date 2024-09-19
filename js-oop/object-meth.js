// what is call

let obj = {
  name: "chand",
};
function myFunction(age) {
  console.log(this.name + age);
}

// myFunction.call(obj, 21)

// apply mehtods work same as call
// the main difference between both of these is
// unlike call we can pass the arguments infom of an array

function MyDetails(age, profession) {
  console.log(
    `hi this is ${this.name}, iam ${age} yrs old and iam a ${profession}`
  );
}

// MyDetails.apply(obj, [21, "softWare Engineer"])

const bindFn = MyDetails.bind(obj, 21, "software engineer");

// bindFn()

var status = "😒";

setTimeout(() => {
  const status = "😠";

  const data = {
    status: "➡️",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);

const animals = [
  { species: "Lion", name: "king" },
  { species: "tiger", name: "queen" },
];

function printAnimals(i) {
  const print = function () {
    console.log(`# ${i}  && ${this.species}, **  ${this.name}`);
  };
  this.print();
}

// append an Array to another Array

const arry = ["d", "b"];
const elements = [0, 1, 2];
arry.push.apply(arry, elements);
// console.log(arry)

// find a min max number in a Array
const numbers = [5, 25, 546, 8, 4, 2];
console.log(Math.max.apply(null, numbers));

// bind chaining

function f() {
  console.log(this.name);
}

f = f.bind({ name: "chand" }).bind({ name: "rohit" });
f();

//  bind chaining dosn't exist

function checkPassword(succes, failed) {
  let password = prompt("password", "");
  if (password == "RoadSide") {
    succes();
  } else {
    failed();
  }
}
const user = {
  name: "chand kaurati",
  loginSuccesFull() {
    console.log(`${this.name} login`);
  },
  loginFailed() {
    console.log(`${this.name} failed to login`);
  },
};
// checkPassword(user.loginSuccesFull.bind(user), user.loginFailed.bind(user));


// partial application for login function

function checkpass(ok, fail){
   let password = prompt("enter the password")
   if(password === "chand"){
    ok()
   }else{
    fail()
   }
}

const user1 ={
  name : "chandkaurati",

  login(result){
    console.log(this.name + (result ? "login successful" : "login failed"))
  }
}
checkpass(user1.login.bind(user, true), user1.login.bind(user, false))