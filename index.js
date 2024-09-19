// // // function isPalindrome(str) {
// // //   return str === str.split("").reverse().join("");
// // // }

// // // // console.log(isPalindrome("RQ"))

// // // function towSum(arr, target) {
// // //   for (let i = 0; i <= arr.length - 1; i++) {
// // //     for (let j = 1; j <= arr.length - 1; j++) {
// // //       if (target === arr[i] + arr[j]) {
// // //         return [[i], [j]];
// // //       }
// // //     }
// // //   }
// // // }

// // // const indices = towSum([2, 3, 4, 5], 9);
// // // // console.log(indices)

// // // function recursive(n) {
// // // if(n === 0){
// // //   return res
// // // }

// // // return n + recursive(n - 1)
// // // }

// // // // console.log(recursive(10))

// // // function factorial(n){
// // //   if(n === 1 || n === 1){
// // //     return 1
// // //   }
// // //   return n * factorial(n - 1)
// // // }
// // // // console.log(factorial(5))

// // // function cloneobj(obj){
// // //   let res ={}
// // //   for(i in obj){
// // //    res[i] = obj[i]
// // //   }
// // //   return res
// // // }

// // // // console.log(cloneobj(obj))

// // // function deepClone(obj) {
// // //   if (obj === null || typeof obj !== 'object') {
// // //     return obj;
// // //   }

// // //   const newObj = Array.isArray(obj) ? [] : {};

// // //   for (const key in obj) {
// // //     newObj[key] = deepClone(obj[key]);
// // //   }

// // //   return newObj;
// // // }

// // // let obj = {a:1, b:2, d:{da:"di", x:{y:"x", t:"txt"}}}

// // // // console.log(deepClone(obj))

// function multiply(arr) {
//   let res = 1;
//   for (let i = 0; i < arr.length; i++) {
//     res *= arr[i];
//   }

//   console.log(res);
// }
// // multiply([1,2,3,4,5])

// function plus(arr) {
//   if (arr.length <= 0) {
//     return 1;
//   } else {
//     return arr[arr.length - 1] + plus(arr.slice(0, arr.length - 1));
//   }
// }

// console.log(plus([1, 2, 3, 4, 5]));

// console.log([1, 2, 3, 3, 4].slice(0, 4));

// // most asked ds question of rcursion
// // factorial

// function factorial(n) {
//   if (n === 1) {
//     return n;
//   } else {
//     return n * factorial(n-1)
//   }
// }
// // console.log(factorial(5))

// // function rangeOfNumbers(start,end){
  
// // }

// // console.log(rangeOfNumbers(0,5))



class ArrayADT {
   constructor(totalSize, usedSize){
    this.array = new Array(totalSize).fill(null)
    this.usedSize = usedSize
    this.base = this.array[0]

    for(let i = 0 ; i < usedSize ; i++){
       this.array[i] = i
    }
   }
}

const myarray = new ArrayADT(100, 5)
const arr = myarray.array