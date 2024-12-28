let beta = true;
let winner = document.querySelector(".winner");
let esc = document.querySelector(".esc");
let dad = document.querySelector(".dad");
let right_score = document.querySelector(".right_score");
let left_score = document.querySelector(".left_score");
let data = [];
document.querySelectorAll(".box").forEach((item, index) => {
  item.onclick = () => {
    if (beta) {
      beta = false;
      data[index] = "X";
      item.textContent = "X";
    } else {
      beta = true;
      data[index] = "O";
      item.textContent = "O";
    }
    check();
  };
  window.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      data = [0];
      item.textContent = "";
      winner.style.transform = `translateY(-100%)`;
      esc.style.transform = `translateY(100%)`;
      dad.style.filter = "blur(0)";
    }
  });
});
let lPlus = 0;
let rPlus = 0;
function check() {
  if (
    data[0] + data[1] + data[2] == "XXX" ||
    data[3] + data[4] + data[5] == "XXX" ||
    data[6] + data[7] + data[8] == "XXX" ||
    data[0] + data[4] + data[8] == "XXX" ||
    data[2] + data[4] + data[6] == "XXX" ||
    data[0] + data[3] + data[6] == "XXX" ||
    data[1] + data[4] + data[7] == "XXX" ||
    data[2] + data[5] + data[8] == "XXX"
  ) {
    winner.style.transform = `translateY(0%)`;
    esc.style.transform = `translateY(0%)`;
    winner.textContent = "X Wins ☠";
    dad.style.filter = "blur(10px)";
    lPlus++;
    left_score.textContent = lPlus;
  }
  if (
    data[0] + data[1] + data[2] == "OOO" ||
    data[3] + data[4] + data[5] == "OOO" ||
    data[6] + data[7] + data[8] == "OOO" ||
    data[0] + data[4] + data[8] == "OOO" ||
    data[2] + data[4] + data[6] == "OOO" ||
    data[0] + data[3] + data[6] == "OOO" ||
    data[1] + data[4] + data[7] == "OOO" ||
    data[2] + data[5] + data[8] == "OOO"
  ) {
    winner.style.transform = `translateY(0%)`;
    esc.style.transform = `translateY(0%)`;
    winner.textContent = "O Wins 💀";
    dad.style.filter = "blur(10px)";
    rPlus++;
    right_score.textContent = rPlus;
  }
}
