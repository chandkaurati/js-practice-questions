
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
const promiseArray = [promise1,promise2,promise3,promise4]
// const p = Promise.all(resolvedPromisesArray);
// Immediately logging the value of p
// console.log(p);

// setTimeout(() => {
//     console.log(p)
// }, 300);

// 
  
const respromise = Promise.allSettled(promiseArray) 
respromise.then((val)=>{{
    console.log(val)
}}).catch((err)=>{
    console.log(err)
})

Promise.allSettled([Promise.reject(499), Promise.resolve(2)]).then((val)=>{
    console.log(val)
}).catch((err)=>{
  console.log(err)
})
     