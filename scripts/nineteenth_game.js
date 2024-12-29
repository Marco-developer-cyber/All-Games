let data = [
  "dama-chitan.jpg",
  "dama-karyuch.jpg",
  "dama-olma.jpg",
  "dama-qorak.jpg",
  "karol-chitan.jpg",
  "karol-karyuch.jpg",
  "karol-olma.jpg",
  "karol-qorak.jpg",
  "valyet-chitan.jpg",
  "valyet-karuch.jpg",
  "valyet-olma.jpg",
  "valyet-qorak.jpg",
  "dama-chitan.jpg",
  "dama-karyuch.jpg",
  "dama-olma.jpg",
  "dama-qorak.jpg",
  "karol-chitan.jpg",
  "karol-karyuch.jpg",
  "karol-olma.jpg",
  "karol-qorak.jpg",
  "valyet-chitan.jpg",
  "valyet-karuch.jpg",
  "valyet-olma.jpg",
  "valyet-qorak.jpg",
];
let img_display = document.querySelectorAll(".img_display");
img_display.forEach((element, index) => {
  window.addEventListener("keypress", (e) => {
    let key = e.key;
    if (key == "Enter") {
      for (let i = 0; i <= 50; i++) {
        let rand1 = Math.floor(Math.random() * 50) % 24;
        let rand2 = Math.floor(Math.random() * 50) % 24;
        let t = data[rand1];
        data[rand1] = data[rand2];
        data[rand2] = t;
      }
      element.style.backgroundImage = `url(../photos/nineteenth_game_photos/${data[index]})`;
    }
  });
});
