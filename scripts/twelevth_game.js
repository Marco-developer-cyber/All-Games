let beta = true;
let lol = document.querySelectorAll(".lol").forEach((item) => {
  let image = item.querySelector(".lol img");
  let name = item.querySelector(".lol name");
  let level = item.querySelector(".lol level");
  let icons = item.querySelector(".lol icons");
  let bro = name && level && icons;
  item.onclick = () => {
    if (beta) {
      item.style.height = "40vh";
      item.style.borderRadius = "10px";
      beta = false;
      image.style.borderRadius = "10px";
      image.style.transform = "translateY(-10vh)";
    } else {
      beta = true;
      item.style.height = "25vh";
      item.style.borderRadius = "100%";
      image.style.borderRadius = "100%";
      image.style.transform = "translateY(0vh)";
    }
  };
});
let cnt = true;
let element = document.querySelectorAll(".element").forEach((element) => {
  let plus = element.querySelector(".plus");
  element.onclick = () => {
    if (cnt) {
      plus.style.height = "100%";
      cnt = false;
    } else {
      cnt = true;
      plus.style.height = "0%";
    }
  };
});
