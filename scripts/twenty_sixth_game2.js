let box = document.querySelector(".items")
let header = document.querySelector("header")
let tanlangan = JSON.parse(localStorage.getItem("products"))
header.onclick = () => {
    box.remove()
}
for (let i = 0; i <= tanlangan.length; i++) {
    let num = document.createElement("div")
    let img = document.createElement("img");
    num.classList.add("item")
    num.textContent = i + 1;
    num.onclick = () => {
        img.src = `../photos/twenty_first_game_photos/${localStorage.getItem("products", tanlangan[i])}`;
        num.appendChild(img);
        num.textContent = ""
        num = JSON.parse(localStorage.getItem("products")).length > 0
        console.log("LocalStorage products:", tanlangan);

    }
    box.appendChild(num)
}  