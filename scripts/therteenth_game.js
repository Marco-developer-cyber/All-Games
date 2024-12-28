let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let contanier = document.querySelector(".contanier")
let contanier2 = document.querySelector(".contanier2")
function changeData(nomi, rasmi, hoyvon) {
    document.querySelector("img").src = rasmi
    document.querySelector("button").textContent = hoyvon

}

function changeMe(nomi_mb, rasmi_mb, mebellar) {
    document.querySelector("img").src = rasmi_mb
    document.querySelector("button").textContent = mebellar
    document.querySelector("td").textContent = nomi_mb
}

next.addEventListener('click', ()=>{
    contanier.style.display = 'none'
    contanier2.style.display = 'block'
})