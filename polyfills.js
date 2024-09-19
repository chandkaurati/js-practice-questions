let arr  = [1,3,4,5]

let modifiedarr = arr.map((el, i , x)=>{
    return el * 4
})

// console.log(modifiedarr)

Array.prototype.myMap = function(cb){
   let temp = []
   for(let i = 0 ; i <= this.length - 1; i++){
      temp.push(cb(this[i], i, this))
   }
   return temp 
}
let x = arr.myMap((el,i)=>{
  return el + 1
})

// console.log(x)

Array.prototype.myfilter = function(cb){
  let temp =[]
  for(let i = 0 ; i <= this.length; i++){
     if(cb(this[i], i , this)){
        temp.push(this[i])
     }
  }
  
  return temp 
}
// let y = arr.myfilter((el)=> el > 3)
// console.log(y)

let elements = [1,3,4]
let sum = elements.reduce((acc, curr)=>{
    return acc * curr
},4)

Array.prototype.myReduce = function(cb, acc){
  let accumlater = acc
  for(let i = 0; i < this.length ; i++){
    accumlater = accumlater ? cb(accumlater, this[i], i, this) : this[i]
  }
  return accumlater
}
// let t = elements.myReduce((acc, curr)=>{
//     return acc + curr
// })
// let t2 = elements.reduce((acc, curr)=>{
//     return acc + curr
// })

// console.log(t)
// console.log(t2)