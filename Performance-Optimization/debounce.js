// debounce takes two parameter: function and delay time
// debounce helps to stop the code to run continously, instead it adds some delay timer.
// example includes, only perform something after typing product name in search bar.

const inputElement = document.getElementById("input");

//debounce code

function debounce(fnc, delay) {
  let time;

  return function (...args) {
    clearTimeout(time);

    time = setTimeout(() => {
      fnc(...args);
    }, delay);
  };
}

inputElement.addEventListener(
  "input",
  debounce(function () {
    console.log("Debounce Example");
  }, 1000)
);
