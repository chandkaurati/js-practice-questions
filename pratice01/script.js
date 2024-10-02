function throttle(fn, delay) {}

function evernHandler() {
  console.log("ever triggered");
}

// const optimizedFn = _.throttle(evernHandler, 1000)

function myThrottle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

const optimizedFn = myThrottle(evernHandler, 4000)

window.addEventListener("scroll", optimizedFn);
