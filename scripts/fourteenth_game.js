let left_score = document.querySelector(".left_score");
let right_score = document.querySelector(".right_score");
let left_img = document.querySelector(".user_hand img");
let right_img = document.querySelector(".comp_hand img");

let data = [
  "../photos/fourteenth_game_photos/dom_dom_ziki/qaychi2.jpg", // Ножницы
  "../photos/fourteenth_game_photos/dom_dom_ziki/qogoz2.jpg", // Бумага
  "../photos/fourteenth_game_photos/dom_dom_ziki/tosh2.jpg", // Камень
];

let userScore = 0;
let compScore = 0;

window.addEventListener("keypress", (e) => {
  let randomIndex = Math.floor(Math.random() * 3);
  let randomImage = data[randomIndex];
  let comp = randomIndex;

  if (e.key == "1") {
    left_img.src = "../photos/fourteenth_game_photos/dom_dom_ziki/qaychi1.jpg";
    right_img.src = randomImage;
    check(0, comp);
  } else if (e.key == "2") {
    left_img.src = "../photos/fourteenth_game_photos/dom_dom_ziki/qogoz1.jpg";
    right_img.src = randomImage;
    check(1, comp);
  } else if (e.key == "3") {
    left_img.src = "../photos/fourteenth_game_photos/dom_dom_ziki/tosh1.jpg";
    right_img.src = randomImage;
    check(2, comp);
  }
});

function check(user, comp) {
  if (user === comp) {
  } else if (
    (user === 0 && comp === 1) ||
    (user === 1 && comp === 2) ||
    (user === 2 && comp === 0)
  ) {
    userScore++;
    left_score.textContent = userScore;
  } else {
    compScore++;
    right_score.textContent = compScore;
  }
}

let i = document.querySelector(".fa-solid");
let controls = document.querySelector(".controls");
let beta = true;
i.onclick = () => {
  if (beta) {
    beta = false;
    controls.style.transform = `translateX(10%)`;
  } else {
    beta = true;
    controls.style.transform = `translateX(-70%)`;
  }
};
