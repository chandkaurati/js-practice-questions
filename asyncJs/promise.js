
const promiseone =  new Promise((resolve , reject)=>{
    setTimeout(() => {
     resolve("promise has been resolved success9fully")
    }, 1000);
})

const promise1 = new Promise((resolve,rej)=>{
    setTimeout(() => {
        resolve("promise one resolved")
    }, 1000);
})
const promise2 = new Promise((resolve,rej)=>{
    setTimeout(() => {
        resolve("promise tow resolved")
    }, 2000);
})
const promise3 = new Promise((resolve,rej)=>{
    setTimeout(() => {
        resolve("promise three resolved")
    }, 3000);
})
const promise4 = new Promise((resolve,rej)=>{
    setTimeout(() => {
        resolve("promise four resolved")
    }, 5000);
})
// const promise5 = new Promise((resolve,rej)=>{
//     setTimeout(() => {
//         rej(404)
//     }, 5000);
// })

const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];
// const rejectedPromise = [Promise.reject(400), Promise.reject(401)]
const promiseArray = [promise1,promise2,promise3,promise4]
// const p = Promise.all(resolvedPromisesArray);
// Immediately logging the value of p
// console.log(p);

// setTimeout(() => {
//     console.log(p)
// }, 300);

// 
  
// const respromise = Promise.allSettled(promiseArray) 
// respromise.then((val)=>{{
//     console.log(val)
// }}).catch((err)=>{
//     console.log(err)
// })

// Promise.allSettled([Promise.reject(499), Promise.resolve(2)]).then((val)=>{
//     console.log(val)
// }).catch((err)=>{
//   console.log(err)
// })
     
// Promise.any(resolvedPromisesArray).then((value)=>{
//     console.log(value)
// })

const promiseA = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise A")
    }, 500);
})
const promiseB = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise B")
    }, 300);
})

function sleep(time, value, state){
    return new Promise((resolve, reject)=>{
        if(state?.trim() === "fullfill"){
            resolve(value)
        }else{
            reject(404)
        }
    })
}

const p1 = sleep("500", 34, "fullfill")
const p2 = sleep("200", 654, "rej")

Promise.race([p1,p2]).then((val)=>{
  console.log(val)
}).catch((err)=>{
    console.log(err)
})