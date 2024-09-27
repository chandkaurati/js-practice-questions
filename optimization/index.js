const inputEl = document.querySelector("input");

const handleInput =function (e) {
  console.log("form the outer" , this.name);
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

const myThrottletow = (cb, delay) => {
  let firstCall = true;
  let timer;
  return function (...args) {
    // console.log(this.name)
    if (firstCall) {
      cb.apply(this, args);
      firstCall = false;
      return;
    }
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      cb.apply(this, args);
    }, delay);
  };
};

const debounceCallAPI = myThrottletow(handleInput, 400);
inputEl.addEventListener("input", (e) => {
  debounceCallAPI.call({ name: "Chaand" }, e);
});

// throtling

async function getPosts(params) {
  const data = await fetch("https://dummyjson.com/products/categories");
  console.log(data);
}

function useThrotling(fn, delay) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

// const fetchtProducts = useThrotling(getPosts, 400);

// document.addEventListener("scroll", () => {
//   fetchtProducts();
// });

// debounce implementatiton

// we can user loadsh debounce and throttle also
const btnEL = document.querySelector(".increment-btn");
const pressedBtn = document.querySelector(".increment-pressed");
const triggerBtn = document.querySelector(".increment-triggerd");

let pressCounter = 0;
let triggerCounter = 0;

function triggerIncrement() {
  triggerBtn.innerHTML = ++triggerCounter;
}

function incrementDebounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      triggerIncrement();
    }, delay);
  };
}

const debouncedTrigger = incrementDebounce(getPosts, 800);
btnEL.addEventListener("click", () => {
  pressedBtn.innerHTML = ++pressCounter;
  debouncedTrigger();
});

// throttle implementation

const throttleButtonElement = document.querySelector(".throtle-btn");
const throttlePressdEL = document.querySelector(".throttle-pressed");
const throttleTriggerEL = document.querySelector(".throttle-triggerd");

let throttlePressCount = 0;
let throttleTriggerCount = 0;

function incrementThrottle() {
  throttleTriggerEL.innerHTML = ++throttleTriggerCount;
}

const myThrottle = (cb, delay) => {
  let timer;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      cb(...args);
    }, delay);
  };
};

const optimizedFn = myThrottle(incrementThrottle, 1000);

throttleButtonElement.addEventListener("click", () => {
  throttlePressdEL.innerHTML = ++throttlePressCount;
  optimizedFn();
});

console.log("HI");
