let display = document.getElementById("inputbox");
let button = document.querySelectorAll("button");
let buttonsArrays = Array.from(button);
let string = "";

buttonsArrays.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "Del") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (e.target.innerHTML == "Ac") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
