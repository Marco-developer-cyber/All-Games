let st1 = document.querySelector(".st1");
let st2 = document.querySelector(".st2");
let round = document.querySelector(".round")
let positionX = 0
let positionY = 0
let stayX = 6
let stayY = 6
let c = 0
window.addEventListener("keypress", (t)=>{
    if(t.key == "ArrowRight") {
        c+=100
    }
    else if (t.key == "ArrowLeft") {
        c-=100
    }
    st1.style.right = `${c}px`
    st1.style.left = `${c}px`
})
let m = 0
window.addEventListener("keypress", (b)=>{
    if(b.key == "d") {
        m+=100
    }
    else if (b.key == "a") {
        m-=100
    }
    st2.style.right = `${m}px`
    st2.style.left = `${m}px`
})

function beta() {
    positionX += stayX
    positionY += stayY
    if(positionX + stayX > 550 || positionY + stayY < 0) {
        stayX = -stayX
        stayY = -stayY
    }
    round.style.transform = `translateY(${stayY}, translateX(${stayX}))`
}
window.addEventListener("keypress", beta);
