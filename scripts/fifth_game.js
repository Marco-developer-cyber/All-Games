let right = document.querySelector(".right");
let rand_num = document.querySelector(".rand_num");
let numbers = document.getElementById("numbers");
let check = document.querySelector(".check");

let random = Math.floor(Math.random() * 1000000);
rand_num.textContent = random;

check.addEventListener("click", () => {
  random = Math.floor(Math.random() * 1000000);
  rand_num.textContent = random;
  
  // Преобразуем значение в поле ввода в число, убирая пробелы
  let userInput = parseInt(numbers.value.trim());
  
  // Сравниваем числа
  if (userInput === random) {
    right.textContent = "✔";
    numbers.value = "Tashaq";  // Изменяем значение в поле
    console.log("Tashaq");
  } else {
    right.textContent = "❌";
    numbers.value = "";  // Очищаем поле ввода
    console.log("Ikki mart Tashaq");
  }
});

// window.addEventListener("keyup", (e)=> {
//     if(e.key == "Enter") {
//     }
// })
