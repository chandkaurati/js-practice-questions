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
