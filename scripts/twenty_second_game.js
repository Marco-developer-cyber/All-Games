let buttons = document.querySelectorAll(".row button");
let right = document.querySelector(".right_score");
let wrong = document.querySelector(".wrong_score");
let first_text = document.querySelector(".first_text");
let second_text = document.querySelector(".second_text");
second_text.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, consequuntur.";
let matn = second_text.textContent;
let audio1 = new Audio("../audio/twenty_second_game_audio/1.mp3");
let audio3 = new Audio("../audio/twenty_second_game_audio/3.wav");
let audio6 = new Audio("../audio/twenty_second_game_audio/6.mp3");
let r = 0;
let w = 0;

window.addEventListener("keypress", (e) => {
  if (matn[0] == e.key) {
    second_text.textContent = matn.slice(1);
    first_text.textContent += matn[0];
    matn = matn.slice(1);
    audio1.currentTime = 0;
    audio3.play();
    r++;
    right.textContent = r;
    if (second_text.textContent == "") {
      audio6.play();
    }
  } else {
    audio1.currentTime = 0;
    audio1.play();
    w--;
    wrong.textContent = w;
  }
  buttons.forEach(element => {
    if(element.textContent == e.key) {
        element.style.backgroundColor = 'blue'
        setTimeout(function(){
        element.style.backgroundColor = 'rgb(232, 232, 232)'
        },100)
    }
  });
});
