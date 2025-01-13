let lambo = document.querySelector(".lambo");
let ferrari = document.querySelector(".ferrari");
let burst = document.querySelector(".burst1");
let burst2 = document.querySelector(".burst2");
let CarX = 0;
let CarY = 0;

window.addEventListener("keydown", (l) => {
  if (l.key == "ArrowLeft") {
    lambo.style.transform = `rotate(0deg)`;
    burst.style.transform = `rotate(0deg)`;
    CarX -= 100;
  } else if (l.key == "ArrowRight") {
    lambo.style.transform = `rotate(180deg)`;
    burst.style.transform = `rotate(180deg)`;
    CarX += 100;
  } else if (l.key == "ArrowUp") {
    lambo.style.transform = `rotate(90deg)`;
    burst.style.transform = `rotate(90deg)`;
    CarY -= 100;
  } else if (l.key == "ArrowDown") {
    lambo.style.transform = `rotate(270deg)`;
    burst.style.transform = `rotate(270deg)`;
    CarY += 100;
  }
  else if (l.key == "Enter") {
    lambo.style.display = `none`
    burst.style.display = `block`
}
  lambo.style.left = `${CarX}px`;
  lambo.style.right = `${CarX}px`;
  lambo.style.top = `${CarY}px`;
  lambo.style.bottom = `${CarY}px`;

  burst.style.top = `${CarY}px`
  burst.style.bottom = `${CarY}px`
  burst.style.left = `${CarX}px`
  burst.style.right = `${CarX}px`
});

let ferX = 0;
let ferY = 0;
window.addEventListener("keydown", (r) => {
  if (r.key == "a") {
    ferrari.style.transform = `rotate(0deg)`;
    burst2.style.transform = `rotate(0deg)`;
    ferX -= 100;
  } else if (r.key == "d") {
    ferrari.style.transform = `rotate(180deg)`;
    burst2.style.transform = `rotate(180deg)`;
    ferX += 100;
  } else if (r.key == "w") {
    ferrari.style.transform = `rotate(90deg)`;
    burst2.style.transform = `rotate(90deg)`;
    ferY -= 100;
  } else if (r.key == "s") {
    ferrari.style.transform = `rotate(270deg)`;
    burst2.style.transform = `rotate(270deg)`;
    ferY += 100;
  } else if (r.key == "Enter") {
    ferrari.style.display = `none`;
    burst2.style.display = `block`;
  }
  ferrari.style.left = `${ferX}px`;
  ferrari.style.right = `${ferX}px`;
  ferrari.style.top = `${ferY}px`;
  ferrari.style.bottom = `${ferY}px`;

  burst2.style.top = `${ferY}px`;
  burst2.style.bottom = `${ferY}px`;
  burst2.style.left = `${ferX}px`;
  burst2.style.right = `${ferX}px`;
});
let direction = document.querySelector(".direction");
let controls = document.querySelector(".controls");
let beta = true;

direction.onclick = () => {
  if (beta) {
    controls.style.transform = `translateY(50%)`;
    beta = false;
    direction.innerHTML = `
    <i class="fa-solid fa-circle-up"></i>
    `;
  } else {
    controls.style.transform = `translateY(-90%)`;
    beta = true;
    direction.innerHTML = `   
    <i class="fa-solid fa-circle-down"></i>
    `;
  }
};
