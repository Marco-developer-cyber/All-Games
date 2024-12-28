let left_score = document.querySelector(".left_score");
let right_score = document.querySelector(".right_score");
let left_img = document.querySelector(".user_hand img");
let right_img = document.querySelector(".comp_hand img");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let rock = document.querySelector(".rock");
let data = [
  "../photos/fourteenth_game_photos/dom_dom_ziki/qaychi2.jpg",
  "../photos/fourteenth_game_photos/dom_dom_ziki/qogoz2.jpg",
  "../photos/fourteenth_game_photos/dom_dom_ziki/tosh2.jpg",
];
window.addEventListener("keypress", (e) => {
  let randomImage = data[Math.floor(Math.random() * data.length)];
  let qaychi;
  let qogoz;
  let tosh;
  if (e.key == "1") {
    right_img.src = randomImage;
    left_img.src = "../photos/fourteenth_game_photos/dom_dom_ziki/qaychi1.jpg";
    qaychi = left_img.src =
      "../photos/fourteenth_game_photos/dom_dom_ziki/qaychi1.jpg";
  } else if (e.key == "2") {
    right_img.src = randomImage;
    left_img.src = "../photos/fourteenth_game_photos/dom_dom_ziki/qogoz1.jpg";
    qogoz = left_img.src =
      "../photos/fourteenth_game_photos/dom_dom_ziki/qogoz1.jpg";
  } else if (e.key == "3") {
    right_img.src = randomImage;

    tosh = left_img.src =
      "../photos/fourteenth_game_photos/dom_dom_ziki/tosh1.jpg";
    left_img.src = "../photos/fourteenth_game_photos/dom_dom_ziki/tosh1.jpg";
  }
  // if(qaychi == data[])
});
