let game_display = document.querySelector(".game_display");
let top_item = document.querySelector(".top_item");
let bott_item = document.querySelector(".bott_item");
let key = document.querySelector(".key");
let data = "ALASFSGMKBVCNKBNBLTRLHMLTYJBVNMGDSETYUJHTRGEW4T5Y6U7";
let audio = new Audio("../audio/twenty_second_game_audio/6.mp3");
let t = 0;
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    setInterval(function () {
      let box = document.createElement("span");
      box.classList.add("box");
      box.textContent = data[0];
      data = data.slice(1);
      let rand = Math.trunc(Math.random() * 1000);
      box.style.transform = `translateX(${rand}%)`;
      game_display.appendChild(box);
      let score = data.length + 1;
      score--;
      top_item.textContent = "Harflar:" + score;
      if (score == 0) {
        setTimeout(function () {
          audio.play();
        }, 2000);
      }
    }, 500);
  } else {
    document.querySelectorAll(".game_display .box").forEach((item) => {
      if (item.textContent == e.key) {
        item.textContent = "❌";
        // a.play()
        t++;
        bott_item.textContent = "To'gri:" + t;
      }
    });
  }
  if(e.key) {
    key.textContent = e.key
    setTimeout(function(){
      key.textContent = ""
    },500)
  }
});
