let c = 0;
let rand1 = Math.trunc(Math.random() * 10);
let rand2 = Math.trunc(Math.random() * 10);
window.addEventListener("keypress", (l) => {
    let item = document.querySelector(".item");
  let num1 = (document.querySelector(".num1").textContent = rand1);
  let num2 = (document.querySelector(".num2").textContent = rand2);
  let son = item.textContent;
  let rand3 = rand1 + rand2;
//   if (!isNaN(l.key)) {
//     item.textContent = l.key;
//   }

  if (l.key == "Enter") { 
    console.log("lalalal")
    c++;
    if (son == rand3) {
      let j = document.querySelector(".answers");
      let h1 = document.createElement("div");
      rand3 = rand2 - rand;
      h1.classList.add("plus");
      h1.textContent = `Siz topdingiz ✔ ${c} urinishda`;
      j.appendChild(h1);
      h1.style.backgroundColor = `yellowgreen`;
    } else {
      let j = document.querySelector(".answers");
      let h1 = document.createElement("div");
      h1.classList.add("plus");
      h1.textContent = `Siz topa olmadingiz ❌`;
      j.appendChild(h1);
      h1.style.backgroundColor = `red`;
    }
  }
});
