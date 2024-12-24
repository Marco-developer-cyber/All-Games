let right = document.querySelector(".right");
let rand_num = document.querySelector(".rand_num");
let numbers = document.getElementById("numbers");
let left = document.querySelector(".left");
let p = document.querySelector(".right p ")

let random = Math.floor(Math.random() * 1000000);
rand_num.textContent = random;
window.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    if (parseInt(numbers.value) == random) {
      random = Math.floor(Math.random() * 1000000);
      rand_num.textContent = random;
      p.textContent += "✔";
      left.textContent = "✔";
    } else {
      p.textContent += "❌";
      left.textContent = "❌";
    }
  }
});