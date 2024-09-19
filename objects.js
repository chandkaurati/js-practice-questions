const student1 = {
    name : "chand",
    branch: "b.com",
    cgpa : "8.6",
}

const student2 =  new Object()

student2.name = "chand"
student2.branch = "b.com"
student2.cgpa =6.5


function Animal(name){
    this.name = name
}

const dog = new  Animal("dov")
// console.log(dog)

delete student1.name
// console.log(student1
// )

// for(i in student2){
//     console.log(student2[i])
// }

const values = Object.values(student2)
const keys = Object.values(student1)
const entries = Object.entries(student1)

// console.log(entries)

function Player(name, age, rank){
    this.name = name,
    this.age = age,
    this.rank = rank,
    this.score = score,

    function getScore(){
    return this.score
    }

    function setScore(scr){
        this.score += scr
    }
}

Player.getName = function(){
    return this.name
}

Player.prototype.getRank = function(){
    return this.name
}


// outuput based question objects

const func = (function(a){
    delete a 
    return a
})(5)

const props = "isverified"
const value = false

const user ={
    "user name" : "chand" ,
    [props] : value
}
// 5 console.log(user["user name"])

const nums = {
    a : 1,
    b : 5,
    a : 6
}

console.log(nums)

// create a function multiply obj that multiples all numeric props by two


// 6 what will be the output
const a = {}
const b = {key : "C"}
const c = {key : "A"}

a[b] = 123;
a[c]= 535

// what is json.stringify
// follwo up question =  where can user this ,   ans--> while stroring object inside the local storage
// 

const settings = {
    username : "rohan",
    level  : 13,
    health : 90,
}

const data = JSON.stringify(settings, ["level", "health"])
// 7 if we speccifed key to be stringify inside the arry as second argument
// then it will just created json obj with specified properies
// console.log(data)
 

console.log(Math.floor(Math.PI) * 2)

const shape = {
    radius : 10,
    dimeter(){
    return this.radius * 2
    },
    perimeter: ()=> 2 * Math.PI * this.radius,
    axsis:{
        x : 6,
        y : 54
    }
}

// 20, 3.nnnnn
// 8 because inside the arrow function we cannot accces the this it refers to the window in the browser and 
// global in the node

// destructorinng the objects

//  9 nested destructing
const {axsis:{x,y}}= shape
console.log(x,y)


function getItems(s,d,...g){
    return [...s,...g, d]
}
function getItems2(h,...g){
    return [h,...g]
}
// rest parameter can always should be in a last 


// console.log(getItems(["hdhfds,sdg wege",], "gtgetew", "ggetew"))
console.log(getItems({"f":342},"string"))