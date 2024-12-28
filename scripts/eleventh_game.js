let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let slider = document.querySelector(".slider");
let slides = document.querySelector(".slides");

let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

let box11 = document.querySelector(".box11");
let box22 = document.querySelector(".box22");
let box33 = document.querySelector(".box33");
let box44 = document.querySelector(".box44");

let beta = 0;
next.onclick = () => {
  beta += 25;
  console.log(beta);

  if (beta <= 25) {
    box11.style.transform = "scale(1)";
    box11.style.zIndex = "100";
    box22.style.zIndex = "105";
    box22.style.transform = "scale(1.3)";
  } else if (beta <= 50) {
    box22.style.transform = "scale(1)";
    box33.style.transform = "scale(1.3)";
    box22.style.zIndex = "100";
    box33.style.zIndex = "105";
  } else if (beta <= 75) {
    box33.style.transform = "scale(1)";
    box44.style.transform = "scale(1.3)";
    box33.style.zIndex = "100";
    box44.style.zIndex = "105";
  } else if (beta <= 100) {
    box44.style.transform = "scale(1)";
    box11.style.transform = "scale(1.3)";
    box44.style.zIndex = "100";
    box11.style.zIndex = "105";
  }
  if (beta >= 100) {
    beta = 0;
  }
  slider.style.transform = `translateX(${-beta}%)`;
  slides.style.transform = `translateX(${-beta}%)`;
};
prev.onclick = () => {
  beta -= 25;
  console.log(beta);
  if (beta < 0) {
    beta = 75;
    box11.style.transform = "scale(1)";
    box44.style.transform = "scale(1.3)";
    box11.style.zIndex = "100";
    box44.style.zIndex = "105";
  } else if (beta == 0) {
    box22.style.transform = "scale(1)";
    box11.style.transform = "scale(1.3)";
    box22.style.zIndex = "100";
    box11.style.zIndex = "105";
  } else if (beta <= 25) {
    box33.style.transform = "scale(1)";
    box22.style.transform = "scale(1.3)";
    box33.style.zIndex = "100";
    box22.style.zIndex = "105";
  } else if (beta <= 50) {
    box44.style.transform = "scale(1)";
    box33.style.transform = "scale(1.3)";
    box44.style.zIndex = "100";
    box33.style.zIndex = "105";
  }
  slider.style.transform = `translateX(${-beta}%)`;
  slides.style.transform = `translateX(${-beta}%)`;
};
