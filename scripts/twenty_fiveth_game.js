let word_json = {
  VATAN: ["V", "A", "T", "A", "N"],
  TIRIK: ["T", "I", "R", "I", "K"],
  ONA: ["O", "N", "A"],
  KITOB: ["K", "I", "T", "O", "B"],
  DARAXT: ["D", "A", "R", "A", "X", "T"],
  BOLALAR: ["B", "O", "L", "A", "L", "A", "R"],
  SHOH: ["S", "H", "O", "H"],
  XALQ: ["X", "A", "L", "Q"],
  HAYOT: ["H", "A", "Y", "O", "T"],
  XAZINA: ["X", "A", "Z", "I", "N", "A"],
  OSMON: ["O", "S", "M", "O", "N"],
  OLIM: ["O", "L", "I", "M"],
  DUNYO: ["D", "U", "N", "Y", "O"],
  USTOZ: ["U", "S", "T", "O", "Z"],
  OTA: ["O", "T", "A"],
  QAHRAMON: ["Q", "A", "H", "R", "A", "M", "O", "N"],
};
let word_display = document.querySelector(".word_display");
let words = document.querySelector(".words");
let sozlar = Object.keys(word_json);
for (let i = 1; i <= 10; i++) {
  let p = document.createElement("p");
  p.textContent = sozlar[i];
  words.appendChild(p);
}
let allLetter = [];
for (let i = 0; i < sozlar.length; i++) {
  let massive = word_json[sozlar[i]];
  for (let j = 0; j < massive.length; j++) {
    allLetter.push(massive[j]);
  }
}
let selectedLetters = [];
let selectedElements = [];

for (let i = 0; i < allLetter.length; i++) {
  let rand1 = Math.floor(Math.random() * allLetter.length);
  let rand2 = Math.floor(Math.random() * allLetter.length);
  let temp = allLetter[rand1];
  allLetter[rand1] = allLetter[rand2];
  allLetter[rand2] = temp;
}
for (let i = 0; i < allLetter.length; i++) {
  let word = document.createElement("div");
  word.classList.add("word");
  word_display.appendChild(word);
  word.textContent = allLetter[i];

  word.addEventListener("click", () => {
    if (selectedElements.includes(word)) return;

    word.style.backgroundColor = "yellowgreen";
    selectedLetters.push(word.textContent);
    selectedElements.push(word);

    let currentWord = selectedLetters.join("");
    if (word_json[currentWord]) {
      selectedElements.forEach((el) => {
        el.style.visibility = "hidden";
      });

      document.querySelectorAll(".words p").forEach((word) => {
        if (word.textContent === currentWord) {
          word.style.color = "blue";
        }
      });

      selectedLetters = [];
      selectedElements = [];
    }
  });
}
