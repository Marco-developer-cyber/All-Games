let data = [
  "ayiq.jpg",
  "fil.jpg",
  "ilon.jpg",
  "qoplon.jpg",
  "quyon.jpg",
  "tiger.jpg",
  "ayiq.jpg",
  "fil.jpg",
  "ilon.jpg",
  "qoplon.jpg",
  "quyon.jpg",
  "tiger.jpg",
];
let game_display = document.querySelector(".game_display");
for (let i = 0; i <= 11; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  game_display.appendChild(box);
}
for (let o = 0; o <= 11; o++) {
  box[o].src = "../photos/twentieth_game_photos/back.png";
}
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    for (let i = 0; i <= 50; i++) {
      let rand1 = Math.floor(Math.random() * 50) % 12;
      let rand2 = Math.floor(Math.random() * 50) % 12;
      let t = data[rand1];
      data[rand1] = data[rand2];
      data[rand2] = t;
    }
    for (let o = 0; o <= 11; o++) {
        box[o].src = "../photos/twentieth_game_photos/back.png";
      }
  }
});
let firstCard = null;
let secondCard = null;
let cnt = 0;
let box = game_display.querySelectorAll(".box").forEach((item, index) => {
  item.onclick = () => {
    cnt++;
    item.style.transform = `rotateY(180deg)`;
    setInterval(function () {
      item.src = "../photos/twentieth_game_photos/" + data[index];
      if (cnt == 1) {
        firstCard = item;
      } else if (cnt == 2) {
        secondCard = item;
      }
    }, 300);
  };
});
setTimeout(function () {
  if (firstCard != null && secondCard != null) {
    if (firstCard != secondCard && cnt == 2) {
      firstCard.src = "back.png";
      secondCard.src = "back.png";
      cnt = 0;
      firstCard = null;
      secondCard = null;
    } else {
      cnt = 0;
      firstCard = null;
      secondCard = null;
    }
  }
}, 700);
