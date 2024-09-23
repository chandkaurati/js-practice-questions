const inputEl = document.querySelector("input");

const handleInput = (e) => {
  console.log(e.target.value);
};

const debounce = (fn, time) => {
  let timerid;
  return (...args) => {
    clearTimeout(timerid);
    timerid = setTimeout(() => {
      fn(...args);
    }, time);
  };
};

const debounceCallAPI = debounce(handleInput, 1000);
inputEl.addEventListener("input", debounceCallAPI);




// throtling


async function  getPosts(params) {
  const data = await fetch("https://dummyjson.com/products/categories")
  console.log(data)
}


function useThrotling(fn, delay){
  let timer = null
  return function(){
    clearTimeout(timer)
    timer = setTimeout(() => {
        fn()
    }, delay);
  }
}

const fetchtProducts = useThrotling(getPosts, 400)

document.addEventListener("scroll", ()=>{
  fetchtProducts()
})

const btnEL = document.querySelector(".increment-btn")
const pressedBtn =  document.querySelector(".increment-pressed")
const triggerBtn = document.querySelector(".increment-triggerd")

let pressCounter = 0;
let triggerCounter = 0;

function triggerIncrement(){
  triggerBtn.innerHTML = ++triggerCounter;
}

function incrementDebounce(fn, delay){
  let timer;
  return function(){
    clearTimeout(timer)
    timer = setTimeout(() => {
       triggerIncrement()
    }, delay);
  }
}

const debouncedTrigger = incrementDebounce(getPosts, 1000)
btnEL.addEventListener("click", ()=>{
  pressedBtn.innerHTML = ++pressCounter
   debouncedTrigger()
}) 

