// check numbers approximetly
let num1 = 11.003,
  num2 = 11.008;
console.log(num1 === num2);
let epsilon = 0.005;
console.log(epsilon);

function checkApproximete(num1, num2) {
  return Math.abs(num1 - num2) < epsilon;
}

// console.log(checkApproximete(num1, num2))

let object = {
  name: "Hello",
  age: 20,
  gender: "Male",
};
function renameObjectKye(name, obj) {
  obj.Firstname = obj.name;
  delete obj.name;
}
renameObjectKye("Fullname", object);
// console.log(object)

function coalcase() {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] != null) {
      return arguments[i];
    }
  }
}

console.log(coalcase(null, undefined, "First", 1, 2, 3, null))
