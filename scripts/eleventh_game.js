let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let contanier = document.querySelector(".contanier");
let beta = 0;
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
next.onclick = () => {
  beta += 25;
  console.log(beta);
  if (beta == 0) {
    box1.style.transform = `translateX(25%)`;
  } else if (beta == 25) {
    box2.style.transform = `translateX(${beta}%)`;
  } else if (beta == 50) {
    box3.style.transform = `translateX(${beta}%)`;
  } else if (beta == 75) {
    beta = 0;
    box4.style.transform = `translateX(${beta}%)`;
  }
};
